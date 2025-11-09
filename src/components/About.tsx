import { Target, Users, Zap, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're committed to delivering excellence and innovation in every project we undertake.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our talented professionals bring years of experience and cutting-edge expertise.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "We pride ourselves on quick turnaround times without compromising quality.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data and projects are protected with enterprise-grade security measures.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose EZ Labs?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to help you achieve your goals faster and more efficiently.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
