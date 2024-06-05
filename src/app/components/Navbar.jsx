import Link from "next/link"

export default function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="#">
                    Work
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="#">
                    About
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="#">
                    Contact
                </Link>
            </nav>
        </header>
    );
}
