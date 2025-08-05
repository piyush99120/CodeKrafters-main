'use client';
import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { ShoppingCart, Building, Users, Shield } from "lucide-react";

export default function WebsiteType() {
  const typesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transform = "translateY(0) scale(1)";
            (entry.target as HTMLElement).style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px) scale(0.95)";
      element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const websiteTypes = [
    {
      title: "Corporate Website",
      description: "Professional business websites that establish credibility and showcase company values, services, and expertise",
      icon: <Building className="w-8 h-8 text-white" />,
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      accentColor: "from-blue-400 to-blue-500",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Professional Design", "Company Portfolio", "Team Showcase", "Contact Forms"]
    },
    {
      title: "E-commerce Website",
      description: "Full-featured online stores with secure payment processing, inventory management, and customer accounts",
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      bgColor: "bg-gradient-to-br from-green-600 to-green-700",
      accentColor: "from-green-400 to-green-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Shopping Cart", "Payment Gateway", "Product Catalog", "Order Management"]
    },
    {
      title: "Service Website",
      description: "Service-focused websites that highlight offerings, client testimonials, and easy booking systems",
      icon: <Users className="w-8 h-8 text-white" />,
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-700",
      accentColor: "from-purple-400 to-purple-500",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Service Listings", "Booking System", "Client Reviews", "Portfolio Gallery"]
    },
    {
      title: "Portal Development",
      description: "Custom portals and dashboards for internal operations, client management, and data visualization",
      icon: <Shield className="w-8 h-8 text-white" />,
      bgColor: "bg-gradient-to-br from-orange-600 to-orange-700",
      accentColor: "from-orange-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["User Dashboard", "Admin Panel", "Data Analytics", "Role Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
      <section ref={typesRef} className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-[42px] font-medium text-gray-900 mb-6">
            Website Development
            <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent"> Types</span>
          </h2>
          <p className="text-[22px] font-normal text-gray-700 max-w-3xl mx-auto">
            Discover the different types of websites we develop to meet your specific business needs and objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {websiteTypes.map((type, index) => (
            <Card
              key={index}
              className="scroll-animate bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group overflow-hidden relative rounded-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${type.accentColor}`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-0 relative">
                <div className="h-40 overflow-hidden bg-gray-800">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`flex justify-center items-center w-14 h-14 ${type.bgColor} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {type.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm leading-relaxed mb-4">
                    {type.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {type.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}