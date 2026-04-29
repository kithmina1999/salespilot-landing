import { Button } from "@/components/ui/button";
import { ArrowRight, VideoIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-start text-left space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
            Sovereign Minimalist
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Master WhatsApp <br className="hidden lg:block" />
            Business with <br className="hidden lg:block" />
            <span className="text-blue-600">Salespilot.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
            Empower your team, automate responses, and grow your sales through the world&apos;s favorite messaging app.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Button className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium shadow-none transition-all">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto rounded-full border-slate-200 bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 text-lg font-medium shadow-none transition-all">
              Watch the Demo <VideoIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
          
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-slate-500">
              <strong className="text-slate-700">50+</strong> teams onboarded this month
            </span>
          </div>

        </div>

        {/* Right Side Mockup Placeholder */}
        <div className="hidden lg:block h-[70vh] w-full ">
          <div className="relative w-full h-[70vh] ">
            <Image src={"/assets/hero.png"} alt="hero-image" fill className="object-cover aspect-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
