import { Link } from 'react-router-dom'
import { useState } from 'react'

export function ClientServiceSelectionPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      id: '1',
      name: 'Complete Brand Identity Package',
      description: 'Full logo design, color palette, typography, and brand guidelines document',
      price: '$4,500',
      features: ['Logo design (3 concepts)', 'Color palette & typography', 'Brand guidelines PDF', '3 rounds of revisions']
    },
    {
      id: '2',
      name: 'Logo Design Only',
      description: 'Professional logo design with 2 revision rounds',
      price: '$1,200',
      features: ['Logo design (2 concepts)', '2 rounds of revisions', 'Final files (AI, PNG, SVG)']
    },
    {
      id: '3',
      name: 'Brand Guidelines Document',
      description: 'Complete brand guidelines documentation for existing identity',
      price: '$2,800',
      features: ['Comprehensive brand book', 'Usage guidelines', 'Digital & print formats']
    }
  ]

  const customQuote = {
    name: 'Custom Quote - Website Redesign',
    description: 'Agreed upon scope for full website redesign project',
    price: '$12,000',
    status: 'Approved'
  }

  return (
    <section className="page">
      <header className="page-header">
        <div className="page-kicker">Step 1 of 4</div>
        <h1 className="page-title">Select Your Service</h1>
        <p className="page-subtitle">
          Choose from our predefined packages or confirm your custom quote below.
        </p>
      </header>

      <div className="page-body">
        <div className="page-panel" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', color: '#0f172a' }}>
            Predefined Services
          </h3>
          
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                style={{
                  padding: '1.4rem',
                  border: selectedService === service.id 
                    ? '2px solid #1d4ed8' 
                    : '1px solid rgba(30, 64, 175, 0.5)',
                  borderRadius: '0.8rem',
                  background: selectedService === service.id 
                    ? '#eff6ff' 
                    : '#111827',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.6rem' }}>
                  <div>
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: '1rem', 
                      color: selectedService === service.id ? '#0f172a' : '#f9fafb', 
                      marginBottom: '0.3rem' 
                    }}>
                      {service.name}
                    </h4>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.85rem', 
                      color: selectedService === service.id ? '#4b5563' : '#e5e7eb' 
                    }}>
                      {service.description}
                    </p>
                  </div>
                  <div style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '600', 
                    color: '#1d4ed8',
                    whiteSpace: 'nowrap',
                    marginLeft: '1rem'
                  }}>
                    {service.price}
                  </div>
                </div>
                <ul style={{ 
                  margin: '0.8rem 0 0', 
                  paddingLeft: '1.2rem', 
                  fontSize: '0.85rem',
                  color: selectedService === service.id ? '#4b5563' : '#e5e7eb'
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.3rem' }}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            padding: '1.4rem',
            border: selectedService === 'custom' 
              ? '2px solid #f59e0b' 
              : '2px solid rgba(250, 204, 21, 0.5)',
            borderRadius: '0.8rem',
            background: selectedService === 'custom' 
              ? '#fef3c7' 
              : '#fffbeb',
            marginBottom: '1.5rem',
            transition: 'all 0.2s'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.6rem' }}>
              <div>
                <div style={{ 
                  display: 'inline-block',
                  padding: '0.2rem 0.5rem',
                  background: 'rgba(251, 191, 36, 0.18)',
                  borderRadius: '4px',
                  fontSize: '0.7rem',
                  color: '#b45309',
                  marginBottom: '0.4rem'
                }}>
                  CUSTOM QUOTE
                </div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: '#0f172a', marginBottom: '0.3rem' }}>
                  {customQuote.name}
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#4b5563' }}>
                  {customQuote.description}
                </p>
              </div>
              <div style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                color: '#f59e0b',
                whiteSpace: 'nowrap',
                marginLeft: '1rem'
              }}>
                {customQuote.price}
              </div>
            </div>
            <button
              onClick={() => setSelectedService('custom')}
              style={{
                padding: '0.5rem 1rem',
                background: selectedService === 'custom' ? '#f59e0b' : 'transparent',
                color: selectedService === 'custom' ? '#020617' : '#b45309',
                border: '1px solid #f59e0b',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}
            >
              {selectedService === 'custom' ? '✓ Selected' : 'Select Custom Quote'}
            </button>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Link 
              to="/client/project" 
              style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#4b5563',
                border: '1px solid rgba(148, 163, 184, 0.4)',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              ← Back
            </Link>
            <Link 
              to="/client/briefing" 
              style={{
                padding: '0.75rem 1.8rem',
                background: selectedService ? '#1d4ed8' : 'rgba(29, 78, 216, 0.3)',
                color: selectedService ? '#ffffff' : '#64748b',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.9rem',
                pointerEvents: selectedService ? 'auto' : 'none',
                cursor: selectedService ? 'pointer' : 'not-allowed'
              }}
            >
              Continue to Briefing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
