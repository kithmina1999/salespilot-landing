"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function InnerNav() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        gsap.from(".nav-item", {
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            delay: 0.1,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col justify-center items-center h-full pb-20">
            <div className="flex flex-col gap-12 items-center">
                <Link href="/features" className="text-2xl font-light nav-item">Features</Link>
                <Link href="/pricing" className="text-2xl font-light nav-item">Pricing</Link>
                <Link href="/about" className="text-2xl font-light nav-item">About</Link>
            </div>
            <div className="flex flex-col gap-12 items-center mt-20">
                <Link href="/login" className="text-2xl font-medium nav-item">Login</Link>
                <Link href="/signup" className="text-lg font-medium nav-item">
                    <Button className="px-8 py-6 text-xl">Get Started</Button>
                </Link>
            </div>
        </div>
    );
}

export default function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-2xl mb-12">SalesPilot</SheetTitle>
                </SheetHeader>
                <InnerNav />
            </SheetContent>
        </Sheet>
    )
}