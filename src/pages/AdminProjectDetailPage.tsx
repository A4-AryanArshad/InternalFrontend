import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from '../components/Modal'
import { UpdateStatusForm } from '../components/UpdateStatusForm'
import { AssignCollaboratorForm } from '../components/AssignCollaboratorForm'

export function AdminProjectDetailPage() {
  const { projectId } = useParams()
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
  const [isCollaboratorModalOpen, setIsCollaboratorModalOpen] = useState(false)
  const [currentStatus, setCurrentStatus] = useState('In Progress')
  const [currentCollaborator, setCurrentCollaborator] = useState('Sarah Chen')

  const briefingImages = [
    { id: '1', note: 'Love the minimalist approach and color scheme' },
    { id: '2', note: 'This style but with more vibrant colors' },
    { id: '3', note: 'Reference for typography treatment' }
  ]

  return (
    <section className="page">
      <header className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <div>
            <div className="page-kicker">Project #{projectId}</div>
            <h1 className="page-title">Brand Identity Redesign</h1>
            <p className="page-subtitle">
              Client: Acme Corporation · Started Jan 15, 2024
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button 
              onClick={() => {
                alert('PDF export functionality will be implemented with backend integration.\n\nThis will generate a briefing PDF with:\n- Project summary\n- Client information\n- All reference images\n- Image notes\n- Overall briefing description')
              }}
              style={{
                padding: '0.6rem 1.2rem',
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#3b82f6',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '999px',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              📄 Export PDF
            </button>
            <button 
              onClick={() => setIsStatusModalOpen(true)}
              style={{
                padding: '0.6rem 1.2rem',
                background: '#1d4ed8',
                color: '#ffffff',
                border: 'none',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Update Status
            </button>
          </div>
        </div>
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
              Status: {currentStatus}
            </span>
            <span style={{
              padding: '0.4rem 0.8rem',
              background: 'rgba(29, 78, 216, 0.1)',
              border: '1px solid rgba(29, 78, 216, 0.3)',
              borderRadius: '999px',
              fontSize: '0.8rem',
              color: '#1d4ed8',
              fontWeight: '500'
            }}>
              Payment: Paid ($4,500)
            </span>
            <span style={{
              padding: '0.4rem 0.8rem',
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              borderRadius: '999px',
              fontSize: '0.8rem',
              color: '#3b82f6',
              fontWeight: '500'
            }}>
              Collaborator: {currentCollaborator}
            </span>
          </div>

          <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#0f172a' }}>
            Client Briefing
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
                  color: '#4b5563',
                  lineHeight: '1.4'
                }}>
                  {img.note}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(30, 64, 175, 0.15)',
            border: '1px solid rgba(30, 64, 175, 0.3)',
            borderRadius: '0.6rem',
            padding: '1rem',
            marginTop: '1.5rem'
          }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.6rem', color: '#4b5563' }}>
              Internal Notes
            </h4>
            <textarea
              placeholder="Add internal notes for collaborators..."
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '0.8rem',
                background: 'white',
                border: '1px solid rgba(30, 64, 175, 0.2)',
                borderRadius: '0.4rem',
                color: '#0f172a',
                fontSize: '0.85rem',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        <aside className="page-sidebar">
          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.6rem' }}>Project Details</strong>
            <div style={{ fontSize: '0.85rem', lineHeight: '1.8', color: '#4b5563' }}>
              <div><strong>Service:</strong> Complete Brand Identity Package</div>
              <div><strong>Amount:</strong> $4,500.00</div>
              <div><strong>Payment Date:</strong> Jan 15, 2024</div>
              <div><strong>Deadline:</strong> Jan 30, 2024</div>
            </div>
          </div>

          <div>
            <strong style={{ display: 'block', marginBottom: '0.6rem' }}>Assign Collaborator</strong>
            <button
              onClick={() => setIsCollaboratorModalOpen(true)}
              style={{
                width: '100%',
                padding: '0.6rem',
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#3b82f6',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '0.4rem',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              {currentCollaborator} →
            </button>
          </div>
        </aside>
      </div>

      <Modal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        title="Update Project Status"
      >
        <UpdateStatusForm
          currentStatus={currentStatus}
          onSubmit={(status, notes) => {
            setCurrentStatus(status)
            setIsStatusModalOpen(false)
            if (notes) {
              alert(`Status updated to "${status}"\n\nNotes: ${notes}`)
            } else {
              alert(`Status updated to "${status}"`)
            }
          }}
          onCancel={() => setIsStatusModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isCollaboratorModalOpen}
        onClose={() => setIsCollaboratorModalOpen(false)}
        title="Assign Collaborator"
      >
        <AssignCollaboratorForm
          currentCollaborator={currentCollaborator}
          onSubmit={(collaborator) => {
            setCurrentCollaborator(collaborator)
            setIsCollaboratorModalOpen(false)
            alert(`Collaborator assigned: ${collaborator}`)
          }}
          onCancel={() => setIsCollaboratorModalOpen(false)}
        />
      </Modal>
    </section>
  )
}
