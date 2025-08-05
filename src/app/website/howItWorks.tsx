'use client';
import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Globe, Settings, Smartphone, Wrench } from "lucide-react";

export default function HowItWorks() {
    const howRef = useRef<HTMLDivElement>(null);

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

    const howSteps = [
        {
            title: "Planning & UI Design",
            description: "Research, wireframing, and creating stunning visual designs",
            icon: <Settings className="w-8 h-8 text-white" />,
            bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
            accentColor: "from-blue-400 to-blue-500",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Frontend Development",
            description: "Building responsive interfaces with modern technologies",
            icon: <Smartphone className="w-8 h-8 text-white" />,
            bgColor: "bg-gradient-to-br from-green-500 to-green-600",
            accentColor: "from-green-400 to-green-500",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Backend Integration",
            description: "Connecting databases and APIs for dynamic functionality",
            icon: <Wrench className="w-8 h-8 text-white" />,
            bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
            accentColor: "from-purple-400 to-purple-500",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Deployment & Maintenance",
            description: "Launching your site and ensuring optimal performance",
            icon: <Globe className="w-8 h-8 text-white" />,
            bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
            accentColor: "from-orange-400 to-orange-500",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
            <section ref={howRef} className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-[42px] font-medium text-gray-900 mb-6">
                        How It
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Works</span>
                    </h2>
                    <p className="text-[22px] font-normal text-gray-700 max-w-3xl mx-auto">
                        Our streamlined development process ensures your website is built efficiently and effectively.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {howSteps.map((step, index) => (
                        <Card
                            key={index}
                            className="scroll-animate bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden relative rounded-2xl"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.accentColor}`}></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <CardContent className="p-0 relative">
                                <div className="h-32 overflow-hidden bg-gray-800">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6 text-center space-y-4">
                                    <div className={`flex justify-center items-center w-16 h-16 ${step.bgColor} rounded-2xl mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{step.title}</h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">{step.description}</p>
                                    <Badge variant="secondary" className={`bg-gradient-to-r ${step.accentColor} text-white border-0 px-4 py-1 group-hover:scale-105 transition-transform duration-300`}>
                                        Step {index + 1}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}