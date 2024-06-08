import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                    className="text-4xl font-medium hover:underline underline-offset-4"
                    href="https://www.linkedin.com/in/mateus-koehler"
                    target="_blank">
                    <FaLinkedin></FaLinkedin>
                </Link>
                <Link
                    className="text-4xl font-medium hover:underline underline-offset-4"
                    href="https://github.com/tleytek"
                    target="_blank">
                    <FaGithub></FaGithub>
                </Link>
            </nav>
        </header>
    );
}
