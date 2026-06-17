import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const posts = [
  {
    slug: 'mcp-dev-summit-mumbai-2026',
    title: '638 Slides, 22 Talks, and the Three Forces Reshaping AI Agent Security',
    excerpt: 'Every major MCP security incident in 2025-2026 passed authentication. All authenticated. All breached.',
    date: '2026-06-15',
    tags: ['MCP', 'Security', 'Mumbai'],
    conference: 'MCP Dev Summit Mumbai 2026',
  },
  {
    slug: 'superai-singapore-73-companies',
    title: '73 Companies at SuperAI Singapore — Here\'s What They\'re Building',
    excerpt: 'From agent-to-agent payments to robot deployment as a service. The agentic economy is real.',
    date: '2026-06-16',
    tags: ['SuperAI', 'Startups', 'Singapore'],
    conference: 'SuperAI Singapore 2026',
  },
  {
    slug: 'open-source-summit-india-day1',
    title: 'Open Source Summit India Day 1 — The Agentic Era According to Microsoft, Google, and Linux Foundation',
    excerpt: 'The moat moved from code to context. Three keynotes, one message.',
    date: '2026-06-16',
    tags: ['Open Source', 'Keynotes', 'Mumbai'],
    conference: 'Open Source Summit India 2026',
  },
  {
    slug: 'cloud-native-agent-stack',
    title: 'The 8 Tools You Need to Govern AI Agents on Kubernetes',
    excerpt: 'OpenTelemetry, OPA, Kyverno, Falco, Talos — the governance stack for the agent era.',
    date: '2026-06-17',
    tags: ['Kubernetes', 'Governance', 'Deep Dive'],
    conference: 'KubeCon India 2026',
  },
]

const langs = { en: 'EN', es: 'ES', zh: '中文', hi: 'हिं', fr: 'FR' }

export default function Home() {
  const router = useRouter()
  const { locale } = router

  return (
    <>
      <Head>
        <title>Agentic Report — AI Conference Intelligence</title>
        <meta name="description" content="Live intelligence from the world's top AI conferences. MCP, agents, infrastructure — in 5 languages." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <nav>
          <Link href="/" style={{ color: '#fff', fontWeight: 700 }}>agentic-report</Link>
          <Link href="/conferences">Conferences</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/deep-dives">Deep Dives</Link>
          <div style={{ marginLeft: 'auto' }} className="lang-switch">
            {Object.entries(langs).map(([code, label]) => (
              <Link key={code} href="/" locale={code}
                className={locale === code ? 'active' : ''}>
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hero">
          <h1>Agentic Report</h1>
          <p>Live intelligence from the world's top AI conferences</p>
          <p style={{ color: '#888', fontSize: '0.9em', marginTop: 8 }}>
            MCP Dev Summit · SuperAI · Open Source Summit · KubeCon — in 5 languages
          </p>
        </div>

        <h2>Latest Reports</h2>
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} style={{ color: '#fff', fontSize: '1.15em', fontWeight: 600 }}>
                {post.title}
              </Link>
              <p style={{ margin: '6px 0', color: '#888', fontSize: '0.95em' }}>{post.excerpt}</p>
              <div className="post-meta">
                <span>{post.date}</span> · <span style={{ color: '#7C4DFF' }}>{post.conference}</span>
                {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </li>
          ))}
        </ul>

        <footer>
          Agentic Report · AI Conference Intelligence in EN/ES/中文/हिं/FR<br/>
          Built by Horacio de la Cruz · Powered by SlideScanner v1.8 + Claude
        </footer>
      </div>
    </>
  )
}
