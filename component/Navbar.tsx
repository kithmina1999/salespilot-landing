
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b-2 py-3">
            <div className="container px-5 lg:px-0 mx-auto flex items-center justify-between">
                {/* logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">SalesPilot</span>
                </div>
                {/*items */}
                <div className="flex items-center gap-2">
                    <Link href="/features" className="text-sm font-medium">Features</Link>
                    <Link href="/pricing" className="text-sm font-medium">Pricing</Link>
                    <Link href="/about" className="text-sm font-medium">About</Link>
                </div>
                {/* cta */}
                <div className="flex items-center gap-2 text-black">
                    <Link href="/login" className="text-sm font-medium">Login</Link>
                    <Link href="/signup" className="text-sm font-medium">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}