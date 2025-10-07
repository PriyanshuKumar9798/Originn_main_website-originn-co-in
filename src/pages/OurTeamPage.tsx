import React from 'react';
import { User, Briefcase, Code, Zap, Globe, Cpu, ChevronRight, GraduationCap } from 'lucide-react';

// Data for the team members
const teamMembers = [
  { 
    name: "Priyanshu Kumar", 
    role: "Founder", 
    focus: "Vision & Strategy", 
    icon: Zap,
    institute: "IIT Madras",
    description: "Setting the long-term vision and driving the foundational strategy for Originn's growth and impact."
  },
  { 
    name: "Suharsh Kumar", 
    role: "Chief Operating Officer (COO)", 
    focus: "Operations & Execution", 
    icon: Briefcase,
    institute: "IIT Madras",
    description: "Overseeing daily operations, ensuring efficient execution across all departments and optimizing workflows."
  },
  { 
    name: "Abhijeet Kumar Shah", 
    role: "Founding Member", 
    focus: "Frontend Development ", 
    icon: Code,
    institute: "NST Delhi",
    description: "Specializing in the user interface, building beautiful, responsive, and intuitive web experiences from scratch."
  },
  { 
    name: "Aryan Dhobal", 
    role: "Product Team", 
    focus: "User Experience & Features", 
    icon: User,
    institute: "IIT Madras",
    description: "Focused on identifying user needs, defining product roadmaps, and enhancing the overall user journey."
  },
  { 
    name: "Muskan Chandani", 
    role: "Growth & Product Associate", 
    focus: "Market Strategy & Growth", 
    icon: Globe,
    institute: "IIT Madras",
    description: "Driving market penetration and user acquisition while contributing to product improvements and features."
  },
  { 
    name: "Bhavani Shankar", 
    role: "Core Team Member", 
    focus: "Backend Development", 
    icon: Cpu,
    institute: "NST Delhi",
    description: "Responsible for server-side logic, database management, and ensuring the platform's reliability and scalability."
  },
];

// Component for a single team member card
const TeamMemberCard = ({ member }) => {
  const Icon = member.icon; // Dynamic icon component

  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100 flex flex-col h-full">
      <div className="flex items-start mb-4">
        <div className="p-3 bg-amber-500 rounded-full text-white shadow-lg mr-4">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-sm font-semibold text-amber-600 mt-0.5">{member.role}</p>
          {/* Added Institute Name */}
          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
            <GraduationCap size={12} className="text-gray-400" />
            {member.institute}
          </p>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 flex-grow mb-4">
        {member.description}
      </p>

      <div className="mt-auto pt-3 border-t border-gray-100">
        <p className="text-xs font-medium text-gray-600 flex items-center">
          <ChevronRight size={14} className="text-amber-500 mr-1"/>
          Focus: <span className="ml-1 font-semibold text-gray-800">{member.focus}</span>
        </p>
      </div>
    </div>
  );
};

// Main OurTeamPage component
const OurTeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter p-4 sm:p-8">
      
      {/* Header Section */}
      <header className="max-w-6xl mx-auto py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-2">
          The Pillars of Originn
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Meet Our Dedicated Team
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We are a collective of driven innovators, strategists, and builders committed to empowering the next generation of startups.
        </p>
      </header>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      

    </div>
  );
};

export default OurTeamPage;
