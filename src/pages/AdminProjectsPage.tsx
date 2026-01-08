import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from '../components/Modal'
import { NewProjectForm } from '../components/NewProjectForm'

export function AdminProjectsPage() {
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false)
  const [projects, setProjects] = useState([
    {
      id: '1',
      name: 'Brand Identity Redesign',
      client: 'Acme Corporation',
      status: 'In Progress',
      statusColor: '#1d4ed8',
      payment: 'Paid',
      paymentColor: '#1d4ed8',
      collaborator: 'Sarah Chen',
      date: 'Jan 15, 2024',
      amount: '$4,500'
    },
    {
      id: '2',
      name: 'Website Redesign',
      client: 'TechStart Inc.',
      status: 'Review',
      statusColor: '#facc15',
      payment: 'Paid',
      paymentColor: '#1d4ed8',
      collaborator: 'Mike Johnson',
      date: 'Jan 10, 2024',
      amount: '$12,000'
    },
    {
      id: '3',
      name: 'Logo Design',
      client: 'Local Bakery Co.',
      status: 'Pending',
      statusColor: '#64748b',
      payment: 'Pending',
      paymentColor: '#facc15',
      collaborator: 'Unassigned',
      date: 'Jan 20, 2024',
      amount: '$1,200'
    },
    {
      id: '4',
      name: 'Brand Guidelines',
      client: 'Green Energy Solutions',
      status: 'Completed',
      statusColor: '#1d4ed8',
      payment: 'Paid',
      paymentColor: '#1d4ed8',
      collaborator: 'Sarah Chen',
      date: 'Dec 28, 2023',
      amount: '$2,800'
    }
  ])

  return (
    <section className="page">
      <header className="page-header">
        <div className="page-kicker">Admin Dashboard</div>
        <h1 className="page-title">All Projects</h1>
        <p className="page-subtitle">
          Manage all client projects, review briefings, and track progress.
        </p>
      </header>

      <div className="page-body">
        <div className="page-panel" style={{ gridColumn: '1 / -1' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', margin: 0, color: '#0f172a' }}>
              Active Projects ({projects.length})
            </h3>
            <button 
              onClick={() => setIsNewProjectOpen(true)}
              style={{
                padding: '0.6rem 1.2rem',
                background: '#1d4ed8',
                color: '#ffffff',
                border: 'none',
                borderRadius: '999px',
                fontWeight: '500',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              + New Project
            </button>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/admin/projects/${project.id}`}
                style={{
                  display: 'block',
                  padding: '1.4rem',
                  background: 'white',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '0.8rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1d4ed8'
                  e.currentTarget.style.background = '#eff6ff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                  e.currentTarget.style.background = 'white'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.8rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.4rem', fontSize: '1rem', color: '#0f172a' }}>
                      {project.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>
                      {project.client} · Started {project.date}
                    </p>
                  </div>
                  <div style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    color: '#1d4ed8',
                    whiteSpace: 'nowrap',
                    marginLeft: '1rem'
                  }}>
                    {project.amount}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  <span style={{
                    padding: '0.3rem 0.6rem',
                    background: `${project.statusColor}20`,
                    border: `1px solid ${project.statusColor}50`,
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    color: project.statusColor,
                    fontWeight: '500'
                  }}>
                    {project.status}
                  </span>
                  <span style={{
                    padding: '0.3rem 0.6rem',
                    background: `${project.paymentColor}20`,
                    border: `1px solid ${project.paymentColor}50`,
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    color: project.paymentColor,
                    fontWeight: '500'
                  }}>
                    {project.payment}
                  </span>
                  <span style={{
                    padding: '0.3rem 0.6rem',
                    background: 'rgba(59, 130, 246, 0.2)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    color: '#3b82f6',
                    fontWeight: '500'
                  }}>
                    {project.collaborator}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isNewProjectOpen}
        onClose={() => setIsNewProjectOpen(false)}
        title="Create New Project"
      >
        <NewProjectForm
          onSubmit={(data) => {
            // In a real app, this would make an API call
            const newProject = {
              id: String(projects.length + 1),
              name: data.name,
              client: data.client,
              status: 'Pending',
              statusColor: '#64748b',
              payment: 'Pending',
              paymentColor: '#facc15',
              collaborator: 'Unassigned',
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              amount: data.amount
            }
            setProjects([...projects, newProject])
            setIsNewProjectOpen(false)
            alert(`Project "${data.name}" created successfully!`)
          }}
          onCancel={() => setIsNewProjectOpen(false)}
        />
      </Modal>
    </section>
  )
}
