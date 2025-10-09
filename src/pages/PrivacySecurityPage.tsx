"use client";
import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  DollarSign,
  CheckCircle,
  Clock,
  ArrowRight,
  Package,
  Wrench,
  Truck,
  Star,
  ArrowLeft,
} from "lucide-react";

export default function PrivacySecurityPage() {
  const [activeTab, setActiveTab] = useState("escrow");

  const handleBackToDashboard = () => {
    window.history.back();
  };

  // Sample projects
  const projects = [
    {
      id: "PRJ001",
      name: "Smart Home Device Startup",
      founder: "Tech Innovations Inc.",
      totalAmount: 50000,
      preorderedAmount: 50000,
      releasedAmount: 25000,
      inEscrow: 25000,
      milestones: [
        {
          id: 1,
          name: "Raw Material Procurement",
          description: "Purchase materials for prototype manufacturing",
          amount: 15000,
          status: "completed",
          releaseDate: "2025-09-15",
          icon: Package,
        },
        {
          id: 2,
          name: "Manufacturing & Production",
          description: "Complete manufacturing of first batch",
          amount: 10000,
          status: "completed",
          releaseDate: "2025-10-01",
          icon: Wrench,
        },
        {
          id: 3,
          name: "Quality Testing",
          description: "Quality assurance and product testing",
          amount: 8000,
          status: "in_progress",
          expectedDate: "2025-10-20",
          icon: Star,
        },
        {
          id: 4,
          name: "Shipping & Delivery",
          description: "Final packaging and delivery to backers",
          amount: 12000,
          status: "pending",
          expectedDate: "2025-11-10",
          icon: Truck,
        },
      ],
    },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "completed":
        return {
          color: "bg-green-500/10 text-green-400 border-green-500/30",
          text: "Completed - Funds Released",
        };
      case "in_progress":
        return {
          color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
          text: "In Progress - Funds in Escrow",
        };
      case "pending":
        return {
          color: "bg-blue-500/10 text-blue-400 border-blue-500/30",
          text: "Pending - Funds in Escrow",
        };
      default:
        return {
          color: "bg-gray-500/10 text-gray-400 border-gray-500/30",
          text: "Unknown",
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1020] via-[#141c2f] to-[#1a2236] text-white py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-5"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-10 h-10 text-accent" />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Privacy & Security
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            Your funds are protected with milestone-based escrow. Funds are
            released only after verified completion of each milestone.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10 border-b border-white/10 pb-3">
          {["escrow", "how", "security"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-4 font-medium transition-all rounded-md ${
                activeTab === tab
                  ? "text-accent border-b-2 border-accent"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "escrow"
                ? "Milestone-Based Escrow"
                : tab === "how"
                ? "How It Works"
                : "Security Features"}
            </button>
          ))}
        </div>

        {/* Escrow Section */}
        {activeTab === "escrow" && (
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1f2a40]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-accent/20 transition"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-6 border-b border-white/10 pb-4">
                  <div>
                    <h2 className="text-2xl font-semibold">{project.name}</h2>
                    <p className="text-gray-400">
                      Founder: {project.founder}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-sm text-gray-400 mb-1">
                      Total Preordered
                    </p>
                    <p className="text-3xl font-bold text-accent">
                      ${project.preorderedAmount.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Summary cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/30">
                    <Lock className="w-6 h-6 text-blue-400 mb-1" />
                    <p className="text-gray-400 text-sm">In Escrow</p>
                    <h4 className="text-2xl font-bold text-blue-400">
                      ${project.inEscrow.toLocaleString()}
                    </h4>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/30">
                    <CheckCircle className="w-6 h-6 text-green-400 mb-1" />
                    <p className="text-gray-400 text-sm">Released</p>
                    <h4 className="text-2xl font-bold text-green-400">
                      ${project.releasedAmount.toLocaleString()}
                    </h4>
                  </div>
                  <div className="bg-orange-500/10 p-4 rounded-xl border border-orange-500/30">
                    <DollarSign className="w-6 h-6 text-orange-400 mb-1" />
                    <p className="text-gray-400 text-sm">Total Value</p>
                    <h4 className="text-2xl font-bold text-orange-400">
                      ${project.totalAmount.toLocaleString()}
                    </h4>
                  </div>
                </div>

                {/* Milestones */}
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold mb-2">
                    Project Milestones
                  </h3>
                  {project.milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    const status = getStatusInfo(milestone.status);
                    const isLast = index === project.milestones.length - 1;

                    return (
                      <div key={milestone.id}>
                        <div className="flex gap-4 bg-[#28344f]/60 p-5 rounded-xl border border-white/10 hover:border-accent/40 transition-all duration-200">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              milestone.status === "completed"
                                ? "bg-green-500/20"
                                : milestone.status === "in_progress"
                                ? "bg-yellow-500/20"
                                : "bg-blue-500/20"
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                milestone.status === "completed"
                                  ? "text-green-400"
                                  : milestone.status === "in_progress"
                                  ? "text-yellow-400"
                                  : "text-blue-400"
                              }`}
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex justify-between flex-wrap gap-2">
                              <div>
                                <h4 className="font-semibold">
                                  {milestone.name}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                  {milestone.description}
                                </p>
                              </div>
                              <p className="text-accent font-bold text-xl">
                                ${milestone.amount.toLocaleString()}
                              </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mt-3">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium border ${status.color}`}
                              >
                                {status.text}
                              </span>
                              <span className="text-sm text-gray-400">
                                {milestone.status === "completed"
                                  ? `Released on ${milestone.releaseDate}`
                                  : `Expected: ${milestone.expectedDate}`}
                              </span>
                            </div>

                            {milestone.status === "in_progress" && (
                              <div className="mt-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30 text-yellow-400 text-sm flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Founder is currently working on this milestone.
                              </div>
                            )}
                          </div>
                        </div>

                        {!isLast && (
                          <div className="flex justify-center py-2">
                            <ArrowRight className="w-5 h-5 text-white/20 rotate-90" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* How It Works */}
        {activeTab === "how" && (
          <div className="space-y-8">
            <div className="bg-[#1f2a40]/80 backdrop-blur-md border border-accent/30 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-accent mb-6">
                How Milestone-Based Escrow Works
              </h2>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {
                        [
                          "You Preorder & Money Goes to Escrow",
                          "Milestone 1: Procurement",
                          "Milestone 2: Manufacturing",
                          "Subsequent Milestones",
                          "Your Protection",
                        ][i]
                      }
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {
                        [
                          "When you back a startup, your payment is securely held in escrow until verification.",
                          "Founder completes the first milestone (e.g., raw materials). Funds are released after verification.",
                          "When production completes, the next escrow portion is released.",
                          "This continues for each milestone — shipping, testing, etc.",
                          "If a milestone isn’t completed, remaining funds stay safe and refundable.",
                        ][i]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Features */}
        {activeTab === "security" && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                color: "text-green-400",
                title: "Escrow Protection",
                text: "Funds are held securely and released only after verified completion.",
              },
              {
                icon: Lock,
                color: "text-blue-400",
                title: "Bank-Level Security",
                text: "Your data is encrypted and stored in PCI-DSS compliant servers.",
              },
              {
                icon: Eye,
                color: "text-purple-400",
                title: "Full Transparency",
                text: "Track milestones and fund releases in real time.",
              },
              {
                icon: DollarSign,
                color: "text-yellow-400",
                title: "Refund Protection",
                text: "If milestones aren’t met, remaining escrow funds are refunded.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#28344f]/70 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition"
              >
                <item.icon className={`w-10 h-10 ${item.color} mb-3`} />
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
