
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Navbar() {
    return (
        <nav className="border-b-2 py-4">
            <div className="container px-5 lg:px-0 mx-auto flex items-center justify-between">
                {/* logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">SalesPilot</span>
                </div>
                {/*items */}
                <div className="lg:flex items-center gap-12 capitalize hidden ">
                    <Link href="/features" className="text-lg font-light">Features</Link>
                    <Link href="/pricing" className="text-lg font-light">Pricing</Link>
                    <Link href="/about" className="text-lg font-light">About</Link>
                </div>

                {/* cta */}
                <div className="lg:flex items-center gap-8 text-black hidden">
                    <Link href="/login" className="text-lg font-medium text-blue-600">Login</Link>
                    <Link href="/signup" className="text-lg font-medium">
                        <Button className="px-4  bg-blue-600 text-white py-4 cursor-pointer">Get Started</Button>
                    </Link>
                </div>

                {/* mobile trigger */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}