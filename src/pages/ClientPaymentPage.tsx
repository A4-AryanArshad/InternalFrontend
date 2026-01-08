import { Link } from 'react-router-dom'

export function ClientPaymentPage() {
  return (
    <section className="page">
      <header className="page-header">
        <div className="page-kicker">Step 3 of 4</div>
        <h1 className="page-title">Secure Payment</h1>
        <p className="page-subtitle">
          Complete your payment securely via Stripe. Your project will begin once payment is confirmed.
        </p>
      </header>

      <div className="page-body">
        <div className="page-panel">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', color: '#0f172a' }}>
            Payment Summary
          </h3>

          <div style={{
            background: 'rgba(30, 64, 175, 0.2)',
            padding: '1.2rem',
            borderRadius: '0.6rem',
            marginBottom: '1.5rem',
            border: '1px solid rgba(30, 64, 175, 0.4)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <span style={{ color: '#6b7280' }}>Service:</span>
              <span style={{ color: '#0f172a', fontWeight: '500' }}>Complete Brand Identity Package</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <span style={{ color: '#6b7280' }}>Subtotal:</span>
              <span style={{ color: '#0f172a' }}>$4,500.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <span style={{ color: '#6b7280' }}>Tax:</span>
              <span style={{ color: '#0f172a' }}>$0.00</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '0.8rem',
              borderTop: '1px solid rgba(30, 64, 175, 0.4)',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              <span style={{ color: '#0f172a' }}>Total:</span>
              <span style={{ color: '#1d4ed8' }}>$4,500.00</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.6rem',
            padding: '1.2rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🔒</span>
              <strong style={{ color: '#0f172a' }}>Secure Payment via Stripe</strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.5' }}>
              Your payment is processed securely through Stripe. We never store your card details.
            </p>
          </div>

          <div style={{
            background: 'rgba(29, 78, 216, 0.05)',
            border: '2px dashed rgba(29, 78, 216, 0.3)',
            borderRadius: '0.6rem',
            padding: '2rem',
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>💳</div>
            <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.9rem' }}>
              Stripe Checkout will be embedded here
            </p>
            <p style={{ margin: '0.5rem 0 0', color: '#64748b', fontSize: '0.8rem' }}>
              In production, this will show the actual Stripe payment form
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Link 
              to="/client/briefing" 
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
            <button
              style={{
                padding: '0.75rem 1.8rem',
                background: '#1d4ed8',
                color: '#ffffff',
                border: 'none',
                borderRadius: '999px',
                fontWeight: '500',
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(29, 78, 216, 0.4)'
              }}
            >
              Complete Payment →
            </button>
          </div>
        </div>

        <aside className="page-sidebar">
          <strong style={{ display: 'block', marginBottom: '0.8rem' }}>Payment Info</strong>
          <div style={{ fontSize: '0.85rem', lineHeight: '1.8', color: '#4b5563' }}>
            <p style={{ marginBottom: '0.8rem' }}>
              Payment is required before project work begins. Once confirmed, you'll receive access to
              your project dashboard.
            </p>
            <p style={{ margin: 0 }}>
              All payments are processed securely and you'll receive an email receipt upon completion.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
