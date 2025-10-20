import { useState, useEffect } from 'react'
import {  Rocket, ShieldCheck, Boxes } from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'


export const Hero = () => {
  const [expanded] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = "The next big thing is happening here."
  const blueStartIndex = fullText.indexOf("happening here")
  
  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false
    
    const typeText = () => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeText, 100)
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => {
          isDeleting = true
          typeText()
        }, 2000)
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(fullText.slice(0, currentIndex - 1))
        currentIndex--
        setTimeout(typeText, 50)
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false
        setTimeout(typeText, 500)
      }
    }
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    typeText()
    
    return () => clearInterval(cursorInterval)
  }, [])



  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left copy */}
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            {displayText.slice(0, blueStartIndex)}
            {displayText.length > blueStartIndex && (
              <span className="text-blue-600">
                {displayText.slice(blueStartIndex)}
              </span>
            )}
            {showCursor && <span className="animate-pulse">|</span>}
          </h1>
          {/* <div className="mt-4 text-xlg text-slate-600 max-w-xl">
            <Typewriter
              text="The next big thing is happening here."
              speed={100}
              loop={true}
              className="text-xl font-medium text-slate-700"
            />
          </div> */}

          {/* <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors cursor-pointer" aria-label="Explore live campaigns">
              Explore Live Campaigns <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={handleToggleKnowMore}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-expanded={expanded}
              aria-controls="hero-know-more"
            >
              {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />} Know more
            </button>
          </div> */}

          {/* Expandable Know More */}
          <div id="hero-know-more" className={`overflow-hidden transition-[max-height] duration-500 ${expanded ? 'max-h-[600px] mt-8' : 'max-h-0'}`}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <InfoCard title="Escrow Protection" desc="Funds released only on verified milestones." />
              <InfoCard title="Transparent Milestones" desc="Track progress from prototype to delivery." />
              <InfoCard title="Verified Startups" desc="Curated from top incubators and design schools." />
            </div>
          </div>
        </div>

        {/* Right cards grid - 3 cards only */}
        <div className="grid grid-cols-1 gap-6 h-[500px]">
          {/* First card - Live Campaigns */}
          <BentoCard
            title="Live Campaigns"
            desc="Back exciting startups"
            color="bg-gradient-to-br from-blue-50 to-indigo-100"
            pattern="bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:24px_24px]"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            Icon={Rocket}
            lottieUrl="https://assets9.lottiefiles.com/packages/lf20_jtbfg2nb.json"
            className="row-span-1 border border-blue-200"
          />
          
          {/* Second card - Pre-Order */}
          <BentoCard
            title="Pre‑Order"
            desc="Secure your spot"
            color="bg-gradient-to-br from-emerald-50 to-green-100"
            pattern="bg-[linear-gradient(45deg,rgba(16,185,129,0.12)_25%,transparent_25%),linear-gradient(-45deg,rgba(16,185,129,0.12)_25%,transparent_25%)] bg-[length:20px_20px]"
            iconBg="bg-emerald-100"
            iconColor="text-emerald-600"
            Icon={Boxes}
            lottieUrl="https://assets9.lottiefiles.com/packages/lf20_wnqlfojb.json"
            className="row-span-1 border border-emerald-200"
          />
          
          {/* Third card - Escrow */}
          <BentoCard
            title="Escrow"
            desc="RBI‑regulated safety"
            color="bg-gradient-to-br from-teal-50 to-cyan-100"
            pattern="bg-[radial-gradient(circle_at_2px_2px,rgba(20,184,166,0.15)_1px,transparent_0)] bg-[length:16px_16px]"
            iconBg="bg-teal-100"
            iconColor="text-teal-600"
            Icon={ShieldCheck}
            lottieUrl="https://assets4.lottiefiles.com/packages/lf20_zrqthn6o.json"
            className="row-span-1 border border-teal-200"
          />
        </div>
      </div>
    </section>
  )
}

type BentoCardProps = {
  title: string
  desc: string
  color: string
  pattern: string
  Icon: React.ComponentType<{ className?: string }>
  iconBg: string
  iconColor: string
  lottieUrl: string
  className?: string
}

const BentoCard = ({ title, desc, color, pattern, Icon, iconBg, iconColor, lottieUrl, className }: BentoCardProps) => {
  return (
    <div
      className={`${color} ${pattern} ${className} group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor} mb-4`}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
          <p className="text-sm text-slate-600">{desc}</p>
        </div>
      </div>
      {/* Lottie animation anchored bottom-right */}
      <div className="pointer-events-none absolute right-2 bottom-2 w-20 h-20 opacity-80">
        <Player autoplay loop src={lottieUrl} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

const InfoCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <h3 className="font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-slate-600">{desc}</p>
  </div>
)
