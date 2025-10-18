import { useEffect, useRef } from 'react'

export const TrustedBySection = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationId: number
    let position = 0
    const speed = 0.5 // pixels per frame
    const logos = slider.children
    const totalWidth = Array.from(logos).reduce((sum, logo) => sum + logo.clientWidth + 32, 0) // 32px gap

    const animate = () => {
      position -= speed
      if (position <= -totalWidth) {
        position = 0
      }
      slider.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const companies = [
    // IITs
    { name: 'IIT Delhi', logo: 'https://icon2.cleanpng.com/20180625/pgz/kisspng-indian-institute-of-technology-delhi-indian-instit-5b317415877989.7013054915299676375549.jpg' },
    { name: 'IIT Bombay', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIT-Bombay-Logo.png' },
    { name: 'IIT Madras', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIT-Madras-Logo.png' },
    { name: 'IIT Kanpur', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIT-Kanpur-Logo.png' },
    { name: 'IIT Kharagpur', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIT-Kharagpur-Logo.png' },
    { name: 'IIT Roorkee', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIT-Roorkee-Logo.png' },
    { name: 'IIT Guwahati', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIT-Guwahati-Logo.png' },
    { name: 'IIT Hyderabad', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIT-Hyderabad-Logo.png' },
    
    // IIMs
    { name: 'IIM Ahmedabad', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIM-Ahmedabad-Logo.png' },
    { name: 'IIM Bangalore', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIM-Bangalore-Logo.png' },
    { name: 'IIM Calcutta', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIM-Calcutta-Logo.png' },
    { name: 'IIM Lucknow', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIM-Lucknow-Logo.png' },
    { name: 'IIM Kozhikode', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIM-Kozhikode-Logo.png' },
    { name: 'IIM Indore', logo: 'https://logos-world.net/wp-content/uploads/2021/02/IIM-Indore-Logo.png' },
    
    // Design Schools
    { name: 'NID Ahmedabad', logo: 'https://logos-world.net/wp-content/uploads/2021/02/NID-Logo.png' },
    { name: 'NIFT Delhi', logo: 'https://logos-world.net/wp-content/uploads/2021/02/NIFT-Logo.png' },
    
    // Top Companies
    { name: 'Tata', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tata-Logo.png' },
    { name: 'Reliance', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Reliance-Logo.png' },
    { name: 'Infosys', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Infosys-Logo.png' },
    { name: 'TCS', logo: 'https://logos-world.net/wp-content/uploads/2020/09/TCS-Logo.png' },
    { name: 'Wipro', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Wipro-Logo.png' },
    { name: 'HCL', logo: 'https://logos-world.net/wp-content/uploads/2020/09/HCL-Logo.png' },
    { name: 'Tech Mahindra', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tech-Mahindra-Logo.png' },
    { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
    { name: 'Flipkart', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Flipkart-Logo.png' },
    { name: 'Paytm', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Paytm-Logo.png' },
    { name: 'Zomato', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Zomato-Logo.png' },
    { name: 'Swiggy', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Swiggy-Logo.png' }
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 mb-2">
          <div className="flex-shrink-0">
            <p className="text-slate-600 text-sm font-medium">Top institutions & companies</p>
            <p className="text-blue-600 text-2xl font-bold">Trust Originn</p>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex items-center gap-8 whitespace-nowrap"
              style={{ width: 'max-content' }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-32 bg-white rounded-lg shadow-sm border border-slate-100 px-4"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-12 max-w-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-xs font-semibold text-slate-600 text-center">${company.name}</div>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
