import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { posts } from '../../data/posts'
import { conferences } from '../../data/conferences'

export async function getStaticPaths() {
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = posts.find(p => p.slug === params.slug)
  const conf = conferences.find(c => c.slug === post.conference)
  return { props: { post, conf } }
}

function renderContent(content) {
  // Simple markdown-like rendering
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i}>{block.replace('## ', '')}</h2>
    }
    if (block.startsWith('**') && block.endsWith('**')) {
      return <p key={i}><strong>{block.replace(/\*\*/g, '')}</strong></p>
    }
    if (block.includes('|')) {
      const rows = block.split('\n').filter(r => r.trim())
      if (rows.length >= 2 && rows[0].includes('|')) {
        const headers = rows[0].split('|').map(h => h.trim()).filter(Boolean)
        const dataRows = rows.slice(2).map(r => r.split('|').map(c => c.trim()).filter(Boolean))
        return (
          <div key={i} style={{ overflowX: 'auto', marginBottom: 16 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #7C4DFF' }}>
                  {headers.map((h, j) => <th key={j} style={{ padding: '8px', textAlign: 'left', color: '#7C4DFF' }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: '1px solid #1E2A4A' }}>
                    {row.map((cell, ci) => <td key={ci} style={{ padding: '6px 8px', color: '#B0BEC5' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    }
    if (block.startsWith('- ') || block.startsWith('1. ')) {
      const items = block.split('\n').filter(l => l.trim())
      return (
        <ul key={i} style={{ paddingLeft: 20, marginBottom: 16 }}>
          {items.map((item, j) => (
            <li key={j} style={{ marginBottom: 4, color: '#B0BEC5' }}>
              {item.replace(/^[-\d]+[\.\)]\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
            </li>
          ))}
        </ul>
      )
    }
    // Regular paragraph
    return <p key={i} style={{ color: '#B0BEC5', lineHeight: 1.7 }}>{block}</p>
  })
}

export default function PostPage({ post, conf }) {
  return (
    <>
      <Head>
        <title>{post.title} — Agentic Report</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Layout>
        <article>
          <div style={{ marginBottom: 24 }}>
            <Link href={`/conferences/${conf.slug}`} style={{ color: conf.color, fontSize: '0.9em' }}>
              ← {conf.shortName}
            </Link>
          </div>

          <h1 style={{ fontSize: '2em', lineHeight: 1.2, marginBottom: 12 }}>{post.title}</h1>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#888' }}>{post.date}</span>
            <span style={{ color: conf.color }}>·</span>
            <span style={{ color: conf.color }}>{conf.shortName}</span>
          </div>

          <div style={{ marginBottom: 24 }}>
            {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          <div className="card" style={{ padding: 16, marginBottom: 24, borderLeft: `3px solid ${conf.color}` }}>
            <p style={{ color: '#E0E0E0', fontStyle: 'italic', margin: 0 }}>{post.excerpt}</p>
          </div>

          <div className="article-content">
            {renderContent(post.content)}
          </div>

          <div style={{ marginTop: 40, padding: 16, background: '#16213E', borderRadius: 8, fontSize: '0.9em', color: '#888' }}>
            <strong style={{ color: '#fff' }}>Horacio de la Cruz</strong> attended {conf.name} at {conf.location}.
            He captured and analyzed conference slides using SlideScanner v1.8, a custom AI-powered tool he built during the conference.
          </div>
        </article>
      </Layout>
    </>
  )
}
