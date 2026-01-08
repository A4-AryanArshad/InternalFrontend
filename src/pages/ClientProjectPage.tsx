import { Link } from 'react-router-dom'

export function ClientProjectPage() {
  return (
    <section className="page">
      <header className="page-header">
        <div className="page-kicker">Welcome</div>
        <h1 className="page-title">Brand Identity Redesign Project</h1>
        <p className="page-subtitle">
          Thank you for choosing our services. Let's get started by selecting your service package and
          submitting your design brief.
        </p>
      </header>

      <div className="page-body">
        <div className="page-panel">
          <div className="badge-row">
            <span className="badge" style={{ background: 'rgba(29, 78, 216, 0.1)', borderColor: 'rgba(29, 78, 216, 0.3)' }}>
              Project #PRJ-2024-089
            </span>
            <span className="badge">Client: Acme Corporation</span>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: '#0f172a' }}>
              Project Overview
            </h3>
            <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '1.2rem' }}>
              We're excited to work with you on refreshing your brand identity. This project will
              include logo design, color palette development, and brand guidelines documentation.
            </p>

            <div style={{ 
              background: 'rgba(30, 64, 175, 0.2)', 
              padding: '1rem', 
              borderRadius: '0.6rem',
              border: '1px solid rgba(30, 64, 175, 0.4)',
              marginBottom: '1.5rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#1d4ed8' }}>
                <strong>Next Step:</strong> Select your service package or confirm your custom quote
              </p>
            </div>

            <Link 
              to="/client/service" 
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.8rem',
                background: '#1d4ed8',
                color: '#ffffff',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.9rem',
                boxShadow: '0 8px 20px rgba(29, 78, 216, 0.4)'
              }}
            >
              Continue to Service Selection →
            </Link>
          </div>
        </div>

        <aside className="page-sidebar">
          <strong style={{ display: 'block', marginBottom: '0.6rem', color: '#0f172a' }}>Project Timeline</strong>
          <div style={{ fontSize: '0.85rem', lineHeight: '1.8', color: '#0f172a' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#1d4ed8' }}>●</span> <span style={{ color: '#0f172a' }}>Service Selection</span>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#64748b' }}>○</span> <span style={{ color: '#4b5563' }}>Briefing Submission</span>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#64748b' }}>○</span> <span style={{ color: '#4b5563' }}>Payment</span>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#64748b' }}>○</span> <span style={{ color: '#4b5563' }}>Project In Progress</span>
            </div>
            <div>
              <span style={{ color: '#64748b' }}>○</span> <span style={{ color: '#4b5563' }}>Delivery</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
