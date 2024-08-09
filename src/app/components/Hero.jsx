import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

export default function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container mx-auto px-4 md:px-6 max-w-[700px]">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            Hi, I&apos;m Mateus Koehler,
                        </h1>
                        <p className="max-w-[600px] md:text-xl">
                            and this is my portfolio site. It&apos;s nothing
                            fancy, just a site with a digestable viewing
                            experience that is meant to direct you to some of my
                            projects on Github.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link
                            className="text-4xl font-medium hover:underline underline-offset-4"
                            href="https://www.linkedin.com/in/mateus-koehler"
                            target="_blank"
                        >
                            <FaLinkedin></FaLinkedin>
                        </Link>
                        <Link
                            className="text-4xl font-medium hover:underline underline-offset-4"
                            href="https://github.com/tleytek"
                            target="_blank"
                        >
                            <FaGithub></FaGithub>
                        </Link>
                        {/*
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 px-8 text-sm text-black font-medium shadow transition-colors hover:bg-gray-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            href="#work"
                        >
                            View Work
                        </Link>
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm text-black font-medium shadow-sm transition-colors hover:bg-gray-300 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="/#contact"
                        >
                            Contact Me
                        </Link>
                        */}
                    </div>
                </div>
                {/*
                    <Image
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        height="550"
                        width="550"
                        src="/portfolio_portrait.png"
                        priority={true}
                    />
                    */}
            </div>
        </section>
    )
}
