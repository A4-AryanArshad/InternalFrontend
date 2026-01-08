import { Link } from 'react-router-dom'
import { useState } from 'react'

export function ClientBriefingPage() {
  const [images, setImages] = useState<Array<{ id: string; note: string }>>([
    { id: '1', note: 'Love the minimalist approach and color scheme' },
    { id: '2', note: 'This style but with more vibrant colors' },
    { id: '3', note: 'Reference for typography treatment' }
  ])
  const [overallBrief, setOverallBrief] = useState('We are looking to modernize our brand identity while maintaining our core values of trust and innovation. The new design should appeal to a younger demographic while still being professional enough for enterprise clients.')

  return (
    <section className="page">
      <header className="page-header">
        <div className="page-kicker">Step 2 of 4</div>
        <h1 className="page-title">Project Briefing</h1>
        <p className="page-subtitle">
          Upload reference images, add notes for each, and provide an overall project description.
        </p>
      </header>

      <div className="page-body">
        <div className="page-panel" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', color: '#0f172a' }}>
            Reference Images
          </h3>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {images.map((img) => (
              <div
                key={img.id}
                style={{
                  aspectRatio: '1',
                  background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.3), rgba(15, 23, 42, 0.6))',
                  border: '1px solid rgba(30, 64, 175, 0.5)',
                  borderRadius: '0.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0.8rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  flex: 1,
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.6rem',
                  fontSize: '2rem'
                }}>
                  🖼️
                </div>
                <textarea
                  value={img.note}
                  onChange={(e) => {
                    const updated = images.map(i => i.id === img.id ? { ...i, note: e.target.value } : i)
                    setImages(updated)
                  }}
                  placeholder="Add notes about this image..."
                  style={{
                    width: '100%',
                    minHeight: '60px',
                    padding: '0.5rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(30, 64, 175, 0.4)',
                    borderRadius: '0.4rem',
                    color: '#e5e7eb',
                    fontSize: '0.8rem',
                    resize: 'vertical'
                  }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => setImages([...images, { id: Date.now().toString(), note: '' }])}
            style={{
              padding: '0.6rem 1.2rem',
              background: 'rgba(30, 64, 175, 0.3)',
              color: '#e5e7eb',
              border: '1px dashed rgba(59, 130, 246, 0.5)',
              borderRadius: '0.6rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
              marginBottom: '2rem',
              width: '100%'
            }}
          >
            + Add Another Image
          </button>

          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#0f172a' }}>
            Overall Project Description
          </h3>
          <textarea
            value={overallBrief}
            onChange={(e) => setOverallBrief(e.target.value)}
            placeholder="Describe your project goals, target audience, style preferences, and any specific requirements..."
            style={{
              width: '100%',
              minHeight: '150px',
              padding: '1rem',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(30, 64, 175, 0.5)',
              borderRadius: '0.6rem',
              color: '#e5e7eb',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
          />

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Link 
              to="/client/service" 
              style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#9ca3af',
                border: '1px solid rgba(148, 163, 184, 0.4)',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              ← Back
            </Link>
            <Link 
              to="/client/payment" 
              style={{
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
              Continue to Payment →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
