import { useParams } from 'react-router-dom'

export function CollaboratorProjectDetailPage() {
  const { projectId } = useParams()

  const briefingImages = [
    { id: '1', note: 'Love the minimalist approach and color scheme' },
    { id: '2', note: 'This style but with more vibrant colors' },
    { id: '3', note: 'Reference for typography treatment' }
  ]

  return (
    <section className="page">
      <header className="page-header">
        <div className="page-kicker">Project #{projectId}</div>
        <h1 className="page-title">Brand Identity Redesign</h1>
        <p className="page-subtitle">
          Client: Acme Corporation · Deadline: Jan 30, 2024
        </p>
      </header>

      <div className="page-body">
        <div className="page-panel">
          <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{
              padding: '0.4rem 0.8rem',
              background: 'rgba(29, 78, 216, 0.1)',
              border: '1px solid rgba(29, 78, 216, 0.3)',
              borderRadius: '999px',
              fontSize: '0.8rem',
              color: '#1d4ed8',
              fontWeight: '500'
            }}>
              Status: In Progress
            </span>
            <span style={{
              padding: '0.4rem 0.8rem',
              background: 'rgba(250, 204, 21, 0.2)',
              border: '1px solid rgba(250, 204, 21, 0.4)',
              borderRadius: '999px',
              fontSize: '0.8rem',
              color: '#facc15',
              fontWeight: '500'
            }}>
              ⏰ Deadline: Jan 30, 2024
            </span>
            <span style={{
              padding: '0.4rem 0.8rem',
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              borderRadius: '999px',
              fontSize: '0.8rem',
              color: '#ef4444',
              fontWeight: '500'
            }}>
              High Priority
            </span>
          </div>

          <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#0f172a' }}>
            Full Client Briefing
          </h3>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.6rem', color: '#4b5563' }}>
              Overall Description
            </h4>
            <p style={{ 
              margin: 0, 
              padding: '1rem', 
              background: '#f9fafb',
              border: '1px solid rgba(30, 64, 175, 0.2)',
              borderRadius: '0.6rem',
              color: '#0f172a',
              lineHeight: '1.6',
              fontSize: '0.9rem'
            }}>
              We are looking to modernize our brand identity while maintaining our core values of trust
              and innovation. The new design should appeal to a younger demographic while still being
              professional enough for enterprise clients.
            </p>
          </div>

          <h4 style={{ fontSize: '0.9rem', marginBottom: '0.8rem', color: '#4b5563' }}>
            Reference Images ({briefingImages.length})
          </h4>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '0.8rem',
            marginBottom: '1.5rem'
          }}>
            {briefingImages.map((img) => (
              <div
                key={img.id}
                style={{
                  aspectRatio: '1',
                  background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.3), rgba(15, 23, 42, 0.6))',
                  border: '1px solid rgba(30, 64, 175, 0.5)',
                  borderRadius: '0.6rem',
                  padding: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  flex: 1,
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.5rem',
                  fontSize: '1.5rem'
                }}>
                  🖼️
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  lineHeight: '1.4'
                }}>
                  {img.note}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.6rem',
            padding: '1rem',
            marginTop: '1.5rem'
          }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.6rem', color: '#4b5563' }}>
              Internal Project Notes
            </h4>
            <p style={{
              margin: 0,
              fontSize: '0.85rem',
              color: '#0f172a',
              lineHeight: '1.6'
            }}>
              Focus on creating a modern, approachable brand that bridges the gap between traditional
              enterprise and contemporary design. The client values trust and innovation—ensure these
              themes are reflected in the visual identity.
            </p>
          </div>
        </div>

        <aside className="page-sidebar">
          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.6rem' }}>Project Info</strong>
            <div style={{ fontSize: '0.85rem', lineHeight: '1.8', color: '#4b5563' }}>
              <div><strong>Service:</strong> Complete Brand Identity Package</div>
              <div><strong>Amount:</strong> $4,500.00</div>
              <div><strong>Started:</strong> Jan 15, 2024</div>
              <div><strong>Days Remaining:</strong> 15 days</div>
            </div>
          </div>

          <div>
            <strong style={{ display: 'block', marginBottom: '0.6rem' }}>Quick Actions</strong>
            <button style={{
              width: '100%',
              padding: '0.6rem',
              background: 'rgba(59, 130, 246, 0.2)',
              color: '#3b82f6',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              borderRadius: '0.4rem',
              fontSize: '0.85rem',
              cursor: 'pointer',
              marginBottom: '0.5rem'
            }}>
              Update Progress
            </button>
            <button style={{
              width: '100%',
              padding: '0.6rem',
              background: 'rgba(29, 78, 216, 0.1)',
              color: '#1d4ed8',
              border: '1px solid rgba(29, 78, 216, 0.3)',
              borderRadius: '0.4rem',
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}>
              Request Review
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}
