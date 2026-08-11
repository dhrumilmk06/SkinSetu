// Mock data placeholder
// Add mock patient records, doctor profiles, diagnoses, etc. here
// for local dev/demo purposes.

export const mockUsers = {
  patients: [],
  doctors: [],
  admins: [],
}

export const mockDiagnoses: {
  id: string
  patientId: string
  condition: string
  confidence: number
  ayushRemedy: string
  status: 'pending' | 'reviewed' | 'closed'
}[] = []
