import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { ClientProjectPage } from './pages/ClientProjectPage'
import { ClientServiceSelectionPage } from './pages/ClientServiceSelectionPage'
import { ClientBriefingPage } from './pages/ClientBriefingPage'
import { ClientPaymentPage } from './pages/ClientPaymentPage'
import { ClientDashboardPage } from './pages/ClientDashboardPage'
import { AdminProjectsPage } from './pages/AdminProjectsPage'
import { AdminProjectDetailPage } from './pages/AdminProjectDetailPage'
import { CollaboratorProjectsPage } from './pages/CollaboratorProjectsPage'
import { CollaboratorProjectDetailPage } from './pages/CollaboratorProjectDetailPage'

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-left">
          <p className="home-availability">Instant pricing, clear briefs, zero chaos.</p>
          <h1 className="home-title">
            Your <span className="home-title-highlight">design project link</span> that
            turns enquiries into paying clients.
          </h1>
          <p className="home-subtitle">
            Share one simple link that walks clients through services, collects a guided
            brief, takes payment, and keeps everyone aligned automatically.
          </p>

          <div className="home-cta-row">
            <button
              className="home-cta-primary"
              onClick={() => navigate('/client/service')}
            >
              Get your share link
            </button>
            <button
              className="home-cta-ghost"
              onClick={() => navigate('/admin/projects')}
            >
              Open project workspace
            </button>
          </div>

          <div className="home-meta">
            <span className="home-meta-dot" />
            <span>Built for design teams – admin, client, and collaborator views baked in.</span>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="home-strip">
        <div className="home-strip-inner">
          <div className="home-strip-card home-strip-card-before">
            <div className="home-strip-label">
              <span className="home-strip-icon">✕</span>
              <span>Before your portal</span>
            </div>
            <p className="home-strip-text">
              DMs, scattered emails, manual quotes, and clients asking “how much do you
              charge?” on repeat.
            </p>
          </div>

          <div className="home-strip-card home-strip-card-after">
            <div className="home-strip-label">
              <span className="home-strip-icon home-strip-icon-check">✓</span>
              <span>After your portal</span>
            </div>
            <p className="home-strip-text">
              One link shares pricing, collects the brief, takes payment, and keeps every
              project on rails automatically.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="home-section">
        <h2 className="home-section-title">How it works</h2>
        <ol className="home-steps">
          <li>
            <span className="home-step-number">1</span>
            <div>
              <h3 className="home-step-title">Share your link</h3>
              <p className="home-step-text">
                Add it to your bio, email signature, or send it in DMs. One link replaces
                every “hey, what&apos;s your rate?” reply.
              </p>
            </div>
          </li>
          <li>
            <span className="home-step-number">2</span>
            <div>
              <h3 className="home-step-title">Client picks their service</h3>
              <p className="home-step-text">
                They browse your services, select options, see pricing, and confirm
                timelines without a back‑and‑forth.
              </p>
            </div>
          </li>
          <li>
            <span className="home-step-number">3</span>
            <div>
              <h3 className="home-step-title">Guided briefing &amp; payment</h3>
              <p className="home-step-text">
                The portal collects files, requirements, and notes, then takes payment
                upfront or via milestones.
              </p>
            </div>
          </li>
          <li>
            <span className="home-step-number">4</span>
            <div>
              <h3 className="home-step-title">You just design</h3>
              <p className="home-step-text">
                Clients see their status, uploads, and next steps in one dashboard while
                you focus on the creative work.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Benefits row */}
      <section className="home-section home-benefits">
        <h2 className="home-section-title">You design, we handle the admin.</h2>
        <div className="home-benefits-grid">
          <article className="home-benefit-card">
            <h3>No‑hassle pricing</h3>
            <p>
              Set your prices and packages once. Clients pick what they need and pay
              before you start.
            </p>
          </article>
          <article className="home-benefit-card">
            <h3>Guided briefs</h3>
            <p>
              Turn vague requests into clear project briefs with structured questions and
              required uploads.
            </p>
          </article>
          <article className="home-benefit-card">
            <h3>Automatic updates</h3>
            <p>
              Keep everyone in the loop with simple status updates instead of long email
              threads.
            </p>
          </article>
        </div>
      </section>

      {/* Features table */}
      <section className="home-section home-features">
        <h2 className="home-section-title">The features that keep projects moving.</h2>
        <div className="home-features-grid">
          <div className="home-features-col">
            <h3 className="home-features-heading">Problems you know too well</h3>
            <ul className="home-features-list">
              <li>Clients ghost after you send a quote.</li>
              <li>Feedback arrives as &quot;can you make it pop?&quot;.</li>
              <li>You&apos;re never sure where projects are stuck.</li>
              <li>Everyone asks the same status questions.</li>
              <li>Pricing feels like a guessing game.</li>
            </ul>
          </div>
          <div className="home-features-col">
            <h3 className="home-features-heading">What your portal handles</h3>
            <ul className="home-features-list home-features-list-accent">
              <li>Simple price controls and minimums.</li>
              <li>Structured feedback and approvals.</li>
              <li>Timeline and status tracking for every client.</li>
              <li>Automated updates and reminders.</li>
              <li>Insights into which services convert best.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-final-cta">
        <h2 className="home-final-title">Chaos made simple.</h2>
        <p className="home-final-text">
          Turn inquiries into clients automatically. Your link does the selling while you
          design.
        </p>
        <button
          className="home-cta-primary home-final-button"
          onClick={() => navigate('/client/service')}
        >
          Get your share link
        </button>
      </section>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="app-brand">
            <span className="app-logo-dot" />
            <span className="app-title">Client Project Portal</span>
          </div>
          <nav className="app-nav">
            <Link className="pill pill-admin" to="/admin/projects">
              Admin
            </Link>
            <Link className="pill pill-collab" to="/collaborator/projects">
              Collaborator
            </Link>
            <Link className="pill pill-client" to="/client/project">
              Client
            </Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Client routes */}
            <Route path="/client/project" element={<ClientProjectPage />} />
            <Route path="/client/service" element={<ClientServiceSelectionPage />} />
            <Route path="/client/briefing" element={<ClientBriefingPage />} />
            <Route path="/client/payment" element={<ClientPaymentPage />} />
            <Route path="/client/dashboard" element={<ClientDashboardPage />} />

            {/* Admin routes */}
            <Route path="/admin/projects" element={<AdminProjectsPage />} />
            <Route path="/admin/projects/:projectId" element={<AdminProjectDetailPage />} />

            {/* Collaborator routes */}
            <Route path="/collaborator/projects" element={<CollaboratorProjectsPage />} />
            <Route
              path="/collaborator/projects/:projectId"
              element={<CollaboratorProjectDetailPage />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
