import { useState } from 'react'

interface AssignCollaboratorFormProps {
  currentCollaborator: string
  onSubmit: (collaborator: string) => void
  onCancel: () => void
}

export function AssignCollaboratorForm({ currentCollaborator, onSubmit, onCancel }: AssignCollaboratorFormProps) {
  const [collaborator, setCollaborator] = useState(currentCollaborator)

  const collaborators = [
    'Unassigned',
    'Sarah Chen',
    'Mike Johnson',
    'Alex Rivera',
    'Emma Wilson'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(collaborator)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontSize: '0.85rem', 
          color: '#cbd5e1',
          fontWeight: '500'
        }}>
          Assign Collaborator *
        </label>
        <select
          value={collaborator}
          onChange={(e) => setCollaborator(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(30, 64, 175, 0.4)',
            borderRadius: '0.6rem',
            color: '#e5e7eb',
            fontSize: '0.9rem',
            fontFamily: 'inherit',
            cursor: 'pointer'
          }}
        >
          {collaborators.map((collab) => (
            <option key={collab} value={collab}>
              {collab}
            </option>
          ))}
        </select>
        <p style={{ 
          margin: '0.5rem 0 0', 
          fontSize: '0.8rem', 
          color: '#9ca3af' 
        }}>
          The collaborator will receive access to this project's full briefing and details.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            color: '#9ca3af',
            border: '1px solid rgba(148, 163, 184, 0.4)',
            borderRadius: '999px',
            fontSize: '0.9rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={{
            padding: '0.75rem 1.8rem',
            background: '#1d4ed8',
            color: '#ffffff',
            border: 'none',
            borderRadius: '999px',
            fontSize: '0.9rem',
            cursor: 'pointer',
            fontWeight: '500',
            boxShadow: '0 8px 20px rgba(29, 78, 216, 0.4)'
          }}
        >
          Assign Collaborator
        </button>
      </div>
    </form>
  )
}


