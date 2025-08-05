'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Examples() {
    const heroRef = useRef<HTMLDivElement>(null);
    const whyMattersRef = useRef<HTMLDivElement>(null);
    const howWorksRef = useRef<HTMLDivElement>(null);
    const examplesRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            heroRef.current?.children || [],
            { opacity: 0, y: 80, scale: 0.8, rotation: -5 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: "back.out(1.7)"
            }
        );

        gsap.fromTo(
            whyMattersRef.current?.children || [],
            { opacity: 0, y: 50, x: -30, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                    trigger: whyMattersRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                }
            }
        );

        gsap.fromTo(
            ".work-card",
            { opacity: 0, y: 60, scale: 0.8, rotationY: 45, rotationX: 15 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                duration: 1,
                stagger: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: howWorksRef.current,
                    start: "top 75%",
                }
            }
        );

        gsap.fromTo(
            ".example-chart",
            { opacity: 0, scale: 0.6, rotation: 15, y: 40 },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: examplesRef.current,
                    start: "top 70%",
                }
            }
        );

        gsap.fromTo(
            ctaRef.current?.children || [],
            { opacity: 0, y: 30, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 80%",
                }
            }
        );

        gsap.to(".floating-element", {
            y: -20,
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="flex items-center justify-center overflow-hidden">
            <section
                ref={ctaRef}
                className="w-full py-20 px-6 lg:px-16 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 flex items-center justify-center"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[42px] font-medium text-gray-900 mb-6">
                        Ready to Transform Your Data?
                    </h2>
                    <p className="text-[22px] font-normal text-gray-700 mb-8 leading-relaxed">
                        Join Us on this journey into the world of data visualization and unlock the hidden stories within your data.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-medium hover:shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-500 animate-pulse">
                            Start Working With Us
                        </button>
                        <button className="border-2 border-gradient-to-r from-purple-400 to-pink-400 text-gray-700 px-10 py-4 rounded-lg font-medium hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:scale-105 transition-all duration-500">
                            See Our Documentation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}