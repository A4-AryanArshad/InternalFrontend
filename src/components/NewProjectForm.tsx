import { useState } from 'react'

interface NewProjectFormProps {
  onSubmit: (data: {
    name: string
    client: string
    service: string
    amount: string
    deadline: string
  }) => void
  onCancel: () => void
}

export function NewProjectForm({ onSubmit, onCancel }: NewProjectFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    service: '',
    amount: '',
    deadline: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.client && formData.service && formData.amount) {
      onSubmit(formData)
      setFormData({ name: '', client: '', service: '', amount: '', deadline: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1.2rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontSize: '0.85rem', 
          color: '#cbd5e1',
          fontWeight: '500'
        }}>
          Project Name *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(30, 64, 175, 0.4)',
            borderRadius: '0.6rem',
            color: '#e5e7eb',
            fontSize: '0.9rem',
            fontFamily: 'inherit'
          }}
          placeholder="e.g., Brand Identity Redesign"
        />
      </div>

      <div style={{ marginBottom: '1.2rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontSize: '0.85rem', 
          color: '#cbd5e1',
          fontWeight: '500'
        }}>
          Client Name *
        </label>
        <input
          type="text"
          value={formData.client}
          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(30, 64, 175, 0.4)',
            borderRadius: '0.6rem',
            color: '#e5e7eb',
            fontSize: '0.9rem',
            fontFamily: 'inherit'
          }}
          placeholder="e.g., Acme Corporation"
        />
      </div>

      <div style={{ marginBottom: '1.2rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontSize: '0.85rem', 
          color: '#cbd5e1',
          fontWeight: '500'
        }}>
          Service Type *
        </label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
          <option value="">Select a service...</option>
          <option value="Complete Brand Identity Package">Complete Brand Identity Package</option>
          <option value="Logo Design Only">Logo Design Only</option>
          <option value="Brand Guidelines Document">Brand Guidelines Document</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Custom Service">Custom Service</option>
        </select>
      </div>

      <div style={{ marginBottom: '1.2rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontSize: '0.85rem', 
          color: '#cbd5e1',
          fontWeight: '500'
        }}>
          Project Amount *
        </label>
        <input
          type="text"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(30, 64, 175, 0.4)',
            borderRadius: '0.6rem',
            color: '#e5e7eb',
            fontSize: '0.9rem',
            fontFamily: 'inherit'
          }}
          placeholder="e.g., $4,500"
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontSize: '0.85rem', 
          color: '#cbd5e1',
          fontWeight: '500'
        }}>
          Deadline (Optional)
        </label>
        <input
          type="date"
          value={formData.deadline}
          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
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
        />
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
          Create Project
        </button>
      </div>
    </form>
  )
}


