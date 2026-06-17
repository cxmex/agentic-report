import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { conferences } from '../../data/conferences'
import { posts } from '../../data/posts'

export default function Conferences() {
  return (
    <>
      <Head><title>Conferences — Agentic Report</title></Head>
      <Layout>
        <h1 style={{ marginBottom: 8 }}>Conferences</h1>
        <p style={{ color: '#888', marginBottom: 30 }}>On-the-ground intelligence from every major AI conference in 2026</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {conferences.map(conf => {
            const count = posts.filter(p => p.conference === conf.slug).length
            return (
              <Link key={conf.slug} href={`/conferences/${conf.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ borderLeft: `4px solid ${conf.color}`, cursor: 'pointer' }}>
                  <h3 style={{ color: '#fff', margin: 0 }}>{conf.shortName}</h3>
                  <p style={{ color: '#888', fontSize: '0.85em', margin: '4px 0' }}>{conf.dates}</p>
                  <p style={{ color: '#666', fontSize: '0.85em', margin: 0 }}>{conf.location.split(',')[0]}</p>
                  <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {conf.stats.slides && <span className="tag">{conf.stats.slides} slides</span>}
                    {conf.stats.talks && <span className="tag">{conf.stats.talks} talks</span>}
                    {conf.stats.companies && <span className="tag">{conf.stats.companies} companies</span>}
                    <span className="tag tag-green">{count} posts</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Layout>
    </>
  )
}
