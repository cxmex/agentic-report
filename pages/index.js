import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { conferences } from '../data/conferences'
import { posts } from '../data/posts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Agentic Report — AI Conference Intelligence</title>
        <meta name="description" content="Live intelligence from the world's top AI conferences. MCP, agents, infrastructure — in 5 languages." />
      </Head>
      <Layout>
        <div className="hero">
          <h1>Agentic Report</h1>
          <p>Live intelligence from the world&apos;s top AI conferences</p>
          <p style={{ color: '#888', fontSize: '0.9em', marginTop: 8 }}>
            960+ slides captured · 55 transcripts analyzed · 73 companies mapped · 5 languages
          </p>
        </div>

        {conferences.map(conf => {
          const confPosts = posts.filter(p => p.conference === conf.slug)
          if (confPosts.length === 0) return null
          return (
            <section key={conf.slug} style={{ marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 4, height: 28, background: conf.color, borderRadius: 2 }}/>
                <div>
                  <Link href={`/conferences/${conf.slug}`} style={{ color: '#fff', fontSize: '1.3em', fontWeight: 700 }}>
                    {conf.shortName}
                  </Link>
                  <span style={{ color: '#666', fontSize: '0.85em', marginLeft: 12 }}>{conf.dates} · {conf.location.split(',')[0]}</span>
                </div>
              </div>
              <ul className="post-list">
                {confPosts.map(post => (
                  <li key={post.slug}>
                    <Link href={`/posts/${post.slug}`} style={{ color: '#fff', fontSize: '1.05em', fontWeight: 600 }}>
                      {post.title}
                    </Link>
                    <p style={{ margin: '4px 0', color: '#888', fontSize: '0.9em' }}>{post.excerpt}</p>
                    <div className="post-meta">
                      <span>{post.date}</span>
                      {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </Layout>
    </>
  )
}
