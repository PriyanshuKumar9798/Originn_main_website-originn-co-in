import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#192a51]/8 via-white to-[#192a51]/5 text-gray-900 py-16 md:py-20 overflow-hidden">
      {/* Layered depth effect backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1 - Deep background with stronger #192a51 */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#192a51]/20 via-transparent to-[#192a51]/15"></div>
      
      {/* Layer 2 - Large mesh gradient elements with shadows for depth */}
      <div className="absolute top-0 -left-32 w-[600px] h-[600px] bg-[#192a51]/30 rounded-full blur-[100px] shadow-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 -right-32 w-[700px] h-[700px] bg-[#192a51]/25 rounded-full blur-[120px] shadow-2xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#192a51]/20 rounded-full blur-[140px]"></div>
      
      {/* Layer 3 - Mid-size depth elements */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-[#192a51]/18 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#192a51]/22 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Layer 4 - Accent overlays with more vibrance */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent-orange/12 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/3 right-1/2 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 left-1/2 w-72 h-72 bg-accent-pink/8 rounded-full blur-3xl"></div>
      
      {/* Layer 5 - Floating orbs for depth with varied sizes */}
      <div className="absolute top-40 left-1/3 w-40 h-40 bg-[#192a51]/25 rounded-full blur-2xl animate-float shadow-lg"></div>
      <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-[#192a51]/20 rounded-full blur-2xl animate-float shadow-lg" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-[#192a51]/18 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
      
      {/* Dot and line mesh pattern with smaller squares */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(25,42,81,.25)_1.5px,transparent_0)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(25,42,81,.12)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(25,42,81,.12)_1.5px,transparent_1.5px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight min-h-[280px] md:min-h-[320px] bg-gradient-to-r from-[#192a51] via-[#2a3f6f] to-[#192a51] bg-clip-text text-transparent drop-shadow-lg">
            <TypewriterText 
              text="The next big thing is happening here" 
              delay={80}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
