import { useNavigate } from 'react-router-dom'
import { HeartPulse, Stethoscope, ShieldCheck, ArrowRight, Leaf } from 'lucide-react'

type RoleCardProps = {
  role: 'patient' | 'doctor' | 'admin'
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  path: string
  colorClass: string
}

function RoleCard({ role, icon, title, subtitle, description, path, colorClass }: RoleCardProps) {
  const navigate = useNavigate()
  return (
    <div
      className={`role-card role-${role} group relative overflow-hidden p-8 flex flex-col gap-5 select-none`}
      onClick={() => navigate(path)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(path)}
      id={`role-card-${role}`}
    >
      {/* Decorative bg blob */}
      <div
        className={`absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20 ${colorClass}`}
      />

      {/* Icon */}
      <div
        className={`relative w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-soft ${colorClass}`}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="relative flex flex-col gap-1.5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          {subtitle}
        </p>
        <h2
          className="text-2xl font-bold text-[var(--color-text-primary)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-1">
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="relative mt-auto flex items-center gap-2 text-sm font-semibold text-[var(--role-text)] group-hover:gap-3 transition-all duration-200">
        Enter portal
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </div>
  )
}

export default function RoleSelectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex flex-col items-center justify-center px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14 flex flex-col items-center gap-4">
        {/* Logo mark */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-soft">
            <Leaf size={20} className="text-white" />
          </div>
          <span
            className="text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            SkinSetu
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Who are you today?
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-md">
          AI-powered skin diagnosis with AYUSH remedy guidance. Select your portal to get started.
        </p>
      </div>

      {/* Role cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <RoleCard
          role="patient"
          icon={<HeartPulse size={26} />}
          title="I'm a Patient / ASHA Worker"
          subtitle="Patient Portal"
          description="Upload a photo of your skin condition and receive AI-driven preliminary diagnosis with AYUSH remedy suggestions."
          path="/patient"
          colorClass="bg-green-500"
        />
        <RoleCard
          role="doctor"
          icon={<Stethoscope size={26} />}
          title="I'm a Doctor"
          subtitle="Practitioner Portal"
          description="Review AI-flagged cases, manage patient records, and provide validated AYUSH / clinical recommendations."
          path="/doctor"
          colorClass="bg-blue-500"
        />
        <RoleCard
          role="admin"
          icon={<ShieldCheck size={26} />}
          title="I'm an Admin"
          subtitle="Admin Portal"
          description="Manage system users, review analytics, configure AI models, and maintain platform health."
          path="/admin"
          colorClass="bg-purple-500"
        />
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-[var(--color-text-muted)] text-center max-w-xs">
        SkinSetu provides AI-assisted preliminary guidance only. Always consult a qualified practitioner for medical decisions.
      </p>
    </div>
  )
}
