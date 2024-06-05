import Link from "next/link"
import Hero from "@/app/components/Hero"
import Work from "@/app/components/Work"
import About from "@/app/components/About"
import Contact from "@/app/components/Contact"

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Hero></Hero>
            <Work></Work>
            <About></About>
            <Contact></Contact>
        </div>
    );
}
