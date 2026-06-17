import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { conferences } from '../../data/conferences'
import { posts } from '../../data/posts'

export async function getStaticPaths() {
  return {
    paths: conferences.map(c => ({ params: { slug: c.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const conf = conferences.find(c => c.slug === params.slug)
  const confPosts = posts.filter(p => p.conference === params.slug)
  return { props: { conf, confPosts } }
}

export default function ConferencePage({ conf, confPosts }) {
  const dayPosts = (day) => confPosts.filter(p => p.day === day || p.day === 0)

  return (
    <>
      <Head><title>{conf.name} — Agentic Report</title></Head>
      <Layout>
        <div style={{ borderLeft: `4px solid ${conf.color}`, paddingLeft: 16, marginBottom: 30 }}>
          <h1 style={{ margin: 0 }}>{conf.name}</h1>
          <p style={{ color: '#888', margin: '4px 0' }}>{conf.dates} · {conf.location}</p>
          <p style={{ color: '#B0BEC5', fontSize: '0.95em' }}>{conf.description}</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
            {conf.stats.slides && <span className="tag">{conf.stats.slides} slides captured</span>}
            {conf.stats.talks && <span className="tag">{conf.stats.talks} talks</span>}
            {conf.stats.transcripts && <span className="tag">{conf.stats.transcripts} transcripts</span>}
            {conf.stats.companies && <span className="tag">{conf.stats.companies} companies</span>}
          </div>
        </div>

        {conf.days.map(day => (
          <section key={day.day} style={{ marginBottom: 30 }}>
            <h2 style={{ borderBottom: `2px solid ${conf.color}`, paddingBottom: 8 }}>
              {day.label}
            </h2>
            <ul className="post-list">
              {dayPosts(day.day).map(post => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`} style={{ color: '#fff', fontWeight: 600, fontSize: '1.05em' }}>
                    {post.title}
                  </Link>
                  <p style={{ margin: '4px 0', color: '#888', fontSize: '0.9em' }}>{post.excerpt}</p>
                  <div className="post-meta">
                    {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </li>
              ))}
              {dayPosts(day.day).length === 0 && (
                <li style={{ color: '#555' }}>Coverage coming soon — scanning in progress</li>
              )}
            </ul>
          </section>
        ))}

        {conf.speakers.length > 0 && (
          <>
            <h2>Speakers</h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {conf.speakers.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </>
        )}

        {conf.companies.length > 0 && (
          <>
            <h2>Companies</h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {conf.companies.map(c => <span key={c} className="tag tag-green">{c}</span>)}
            </div>
          </>
        )}
      </Layout>
    </>
  )
}
