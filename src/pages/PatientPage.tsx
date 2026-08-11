import RoleLayout from '@/components/shared/RoleLayout'

export default function PatientPage() {
  return (
    <RoleLayout role="patient" className="bg-[var(--color-patient-light)]">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1
          className="text-4xl font-bold text-[var(--color-patient-text)] mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Patient / ASHA Worker Portal
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-md">
          Coming soon — AI skin diagnosis &amp; AYUSH remedy suggestions
        </p>
      </div>
    </RoleLayout>
  )
}
