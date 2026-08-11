import RoleLayout from '@/components/shared/RoleLayout'

export default function AdminPage() {
  return (
    <RoleLayout role="admin" className="bg-[var(--color-admin-light)]">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1
          className="text-4xl font-bold text-[var(--color-admin-text)] mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Admin Portal
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-md">
          Coming soon — system management &amp; platform analytics
        </p>
      </div>
    </RoleLayout>
  )
}
