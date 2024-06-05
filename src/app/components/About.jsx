import Link from "next/link"

export default function About() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div
                className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                    <p
                        className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        I&apos;m a software engineer with a passion for building beautiful and functional web applications. I have
                        experience working with a variety of technologies, including React, Node.js, and PostgreSQL.
                    </p>
                    <p
                        className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        In my free time, I enjoy exploring new technologies, reading about the latest trends in web development, and ricing my workflow (I use NeoVim btw (please get that reference)).
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#">
                        Download CV
                    </Link>
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        href="#">
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    )
}
