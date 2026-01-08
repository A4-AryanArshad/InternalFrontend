export function ClientDashboardPage() {
  const statusSteps = [
    { label: 'Briefing Submitted', status: 'completed', date: 'Jan 15, 2024' },
    { label: 'Payment Confirmed', status: 'completed', date: 'Jan 15, 2024' },
    { label: 'Project In Progress', status: 'active', date: 'Jan 16, 2024' },
    { label: 'Review Stage', status: 'pending', date: 'Expected: Jan 25, 2024' },
    { label: 'Delivery', status: 'pending', date: 'Expected: Jan 30, 2024' }
  ]

  return (
    <section className="page">
      <header className="page-header">
        <div className="page-kicker">Client Dashboard</div>
        <h1 className="page-title">Brand Identity Redesign Project</h1>
        <p className="page-subtitle">
          Track your project progress and review submitted materials.
        </p>
      </header>

      <div className="page-body">
        <div className="page-panel" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#0f172a' }}>
            Project Status
          </h3>

          <div style={{ marginBottom: '2rem' }}>
            {statusSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1.2rem',
                  paddingLeft: '1rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: step.status === 'completed' 
                    ? '#1d4ed8' 
                    : step.status === 'active' 
                    ? '#1d4ed8' 
                    : 'rgba(148, 163, 184, 0.4)',
                  border: step.status === 'active' ? '2px solid #1d4ed8' : 'none',
                  boxShadow: step.status === 'active' ? '0 0 12px rgba(29, 78, 216, 0.6)' : 'none',
                  flexShrink: 0,
                  marginTop: '0.2rem'
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.3rem'
                  }}>
                    <span style={{ 
                      color: step.status === 'pending' ? '#64748b' : '#0f172a',
                      fontWeight: step.status === 'active' ? '500' : '400'
                    }}>
                      {step.label}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {step.date}
                    </span>
                  </div>
                  {step.status === 'active' && (
                    <div style={{
                      background: 'rgba(29, 78, 216, 0.1)',
                      border: '1px solid rgba(29, 78, 216, 0.3)',
                      borderRadius: '0.4rem',
                      padding: '0.5rem 0.8rem',
                      fontSize: '0.85rem',
                      color: '#1d4ed8',
                      marginTop: '0.5rem'
                    }}>
                      Currently working on initial concepts
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(30, 64, 175, 0.2)',
            border: '1px solid rgba(30, 64, 175, 0.4)',
            borderRadius: '0.6rem',
            padding: '1.2rem',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ margin: '0 0 0.8rem', fontSize: '0.95rem', color: '#0f172a' }}>
              Submitted Briefing Summary
            </h4>
            <div style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 0.5rem' }}>
                <strong>Service:</strong> Complete Brand Identity Package
              </p>
              <p style={{ margin: '0 0 0.5rem' }}>
                <strong>Reference Images:</strong> 3 images uploaded
              </p>
              <p style={{ margin: 0 }}>
                <strong>Description:</strong> Modernize brand identity while maintaining core values...
              </p>
            </div>
          </div>

          <div style={{
            background: 'rgba(29, 78, 216, 0.1)',
            border: '1px solid rgba(29, 78, 216, 0.3)',
            borderRadius: '0.6rem',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>✓</span>
            <div>
              <strong style={{ color: '#1d4ed8', display: 'block', marginBottom: '0.2rem' }}>
                Payment Confirmed
              </strong>
              <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                $4,500.00 paid on Jan 15, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
