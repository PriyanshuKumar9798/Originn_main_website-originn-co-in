import { Search, ShieldCheck, Rocket, Users } from 'lucide-react'

type StepCardProps = {
  title: string
  description: string
  Icon: React.ComponentType<{ className?: string }>
  gradientFrom: string
  gradientTo: string
}

const StepCard = ({ title, description, Icon, gradientFrom, gradientTo }: StepCardProps) => {
  return (
    <div
      role="article"
      tabIndex={0}
      aria-label={title}
      className="rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="p-6 sm:p-7">
        <div
          className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md ${
            `bg-gradient-to-br ${gradientFrom} ${gradientTo}`
          }`}
        >
          <Icon className="h-8 w-8" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-800">{title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </div>
  )
}

export const HowItWorksSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14" aria-labelledby="how-it-works-heading">

      <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
          How <span className="text-blue-600">Originn</span> Works?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          A comprehensive trust ecosystem connecting innovators, backers, and collaborators to build India's next big thing
          </p>
        </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <StepCard
          title="Discover Innovation"
          description="Explore hand‑curated startups and breakthrough products from India's premier innovation hubs, top‑tier incubators, and leading design schools."
          Icon={Search}
          gradientFrom="from-indigo-500"
          gradientTo="to-blue-700"
        />
        <StepCard
          title="Trust & Validate"
          description="Every venture undergoes rigorous vetting. Your funds are protected in RBI‑regulated escrow accounts with transparent milestone‑based disbursements."
          Icon={ShieldCheck}
          gradientFrom="from-purple-500"
          gradientTo="to-indigo-600"
        />
        <StepCard
          title="Pre‑order & Back"
          description="Support groundbreaking products before mass production. Get exclusive early‑bird pricing and be part of the innovation journey from day one."
          Icon={Rocket}
          gradientFrom="from-orange-500"
          gradientTo="to-rose-600"
        />
        <StepCard
          title="Collaborate & Grow"
          description="Join startups as a team member by contributing your research, patents, or expertise. Build the future together and share in the success."
          Icon={Users}
          gradientFrom="from-emerald-500"
          gradientTo="to-teal-600"
        />
      </div>
    </section>
  )
}

export default HowItWorksSection


