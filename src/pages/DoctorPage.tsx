import RoleLayout from '@/components/shared/RoleLayout'

export default function DoctorPage() {
  return (
    <RoleLayout role="doctor" className="bg-[var(--color-doctor-light)]">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1
          className="text-4xl font-bold text-[var(--color-doctor-text)] mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Doctor / AYUSH Practitioner Portal
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-md">
          Coming soon — clinical dashboard &amp; AI-assisted insights
        </p>
      </div>
    </RoleLayout>
  )
}
