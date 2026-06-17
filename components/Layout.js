import Link from 'next/link'
import { useRouter } from 'next/router'

const langs = { en: 'EN', es: 'ES', zh: '中文', hi: 'हिं', fr: 'FR' }

export default function Layout({ children }) {
  const router = useRouter()
  const { locale, asPath } = router

  return (
    <div className="container">
      <nav>
        <Link href="/" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1em' }}>agentic-report</Link>
        <Link href="/conferences">Conferences</Link>
        <div style={{ marginLeft: 'auto' }} className="lang-switch">
          {Object.entries(langs).map(([code, label]) => (
            <Link key={code} href={asPath} locale={code}
              className={locale === code ? 'active' : ''}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
      <footer>
        agentic-report.com · AI Conference Intelligence in EN/ES/中文/हिं/FR<br/>
        Built by Horacio de la Cruz · Powered by SlideScanner v1.8 + Claude
      </footer>
    </div>
  )
}
