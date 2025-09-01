'use client';
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";

const whyItems = [
    {
        icon: "🧱",
        title: "Build Credibility",
        text: "Builds credibility and trust with professional design",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: "🌍",
        title: "Global Reach",
        text: "Global visibility and access to worldwide audiences",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: "⚙",
        title: "Custom Features",
        text: "Custom features & integrations tailored to your needs",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: "📱",
        title: "Responsive Design",
        text: "Responsive & mobile-friendly design for all devices",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: "💼",
        title: "Business Growth",
        text: "Boosts business operations and drives growth",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export default function Features() {
    const whyRef = useRef<HTMLDivElement>(null);

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
            <section ref={whyRef} className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-[42px] font-medium text-gray-900 mb-6">
                        Why Website Development
                        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Matters</span>
                    </h2>
                    <p className="text-[22px] font-normal text-gray-700 max-w-3xl mx-auto">
                        {"In today's digital landscape, a modern website is essential for establishing credibility, reaching customers, and driving business growth."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {whyItems.map((item, index) => (
                        <Card
                            key={index}
                            className="scroll-animate bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group overflow-hidden relative rounded-2xl"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CardContent className="p-0 relative">
                                <div className="h-32 overflow-hidden rounded-t-2xl bg-gray-800">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-3xl">{item.icon}</div>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}