import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Role } from '@/lib/constants'
import { cn } from '@/lib/utils'

type RoleLayoutProps = {
  role: Role
  children: ReactNode
  className?: string
}

/**
 * Wrapper that applies the correct role CSS class (.role-patient / .role-doctor / .role-admin)
 * so all child components can consume --role-* CSS variables without knowing the role explicitly.
 */
export default function RoleLayout({ role, children, className }: RoleLayoutProps) {
  return (
    <div className={cn(`role-${role} min-h-screen`, className)}>
      {/* Back to role select */}
      <nav className="px-6 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to portal select
        </Link>
      </nav>
      {children}
    </div>
  )
}
