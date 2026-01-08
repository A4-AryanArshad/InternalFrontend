import { Link } from 'react-router-dom'

export function CollaboratorProjectsPage() {
  const projects = [
    {
      id: '1',
      name: 'Brand Identity Redesign',
      client: 'Acme Corporation',
      status: 'In Progress',
      statusColor: '#1d4ed8',
      deadline: 'Jan 30, 2024',
      priority: 'High'
    },
    {
      id: '2',
      name: 'Website Redesign',
      client: 'TechStart Inc.',
      status: 'Review',
      statusColor: '#facc15',
      deadline: 'Jan 25, 2024',
      priority: 'High'
    }
  ]

  return (
    <section className="page">
      <header className="page-header">
        <div className="page-kicker">Collaborator Dashboard</div>
        <h1 className="page-title">My Assigned Projects</h1>
        <p className="page-subtitle">
          View projects assigned to you and access full briefings and deadlines.
        </p>
      </header>

      <div className="page-body">
        <div className="page-panel" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#0f172a' }}>
            Active Assignments ({projects.length})
          </h3>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/collaborator/projects/${project.id}`}
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
                      {project.client}
                    </p>
                  </div>
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
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  <span style={{
                    padding: '0.3rem 0.6rem',
                    background: 'rgba(250, 204, 21, 0.2)',
                    border: '1px solid rgba(250, 204, 21, 0.4)',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    color: '#facc15',
                    fontWeight: '500'
                  }}>
                    ⏰ Deadline: {project.deadline}
                  </span>
                  <span style={{
                    padding: '0.3rem 0.6rem',
                    background: 'rgba(239, 68, 68, 0.2)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    color: '#ef4444',
                    fontWeight: '500'
                  }}>
                    {project.priority} Priority
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
