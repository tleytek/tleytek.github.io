/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/xmcaD9oYCY0
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Component() {
    return (
        (<div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <span className="sr-only">Portfolio</span>
                </Link>
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
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container mx-auto px-4 md:px-6">
                    <div
                        className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I&apos;m Mateus Koehler</h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    I&apos;m a software engineer with a passion for building beautiful and functional web applications.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#">
                                    View Work
                                </Link>
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                    href="#">
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                        <Image
                            alt="Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                            height="550"
                            src="/placeholder.svg"
                            width="550" />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div
                        className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                            <p
                                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Check out some of my recent work.
                            </p>
                        </div>
                    </div>
                    <div
                        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                        <div className="group relative overflow-hidden rounded-xl">
                            <Image
                                alt="Project 1"
                                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
                                height="310"
                                src="/placeholder.svg"
                                width="550" />
                            <div
                                className="absolute inset-0 bg-gray-900/80 p-6 transition-all duration-300 group-hover:bg-gray-900/60">
                                <div className="flex h-full flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-50">Project 1</h3>
                                        <p className="mt-2 text-sm text-gray-300">A web application for managing tasks and projects.</p>
                                    </div>
                                    <Link
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                                        href="#">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl">
                            <Image
                                alt="Project 2"
                                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
                                height="310"
                                src="/placeholder.svg"
                                width="550" />
                            <div
                                className="absolute inset-0 bg-gray-900/80 p-6 transition-all duration-300 group-hover:bg-gray-900/60">
                                <div className="flex h-full flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-50">Project 2</h3>
                                        <p className="mt-2 text-sm text-gray-300">A design system for a SaaS product.</p>
                                    </div>
                                    <Link
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                                        href="#">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl">
                            <Image
                                alt="Project 3"
                                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
                                height="310"
                                src="/placeholder.svg"
                                width="550" />
                            <div
                                className="absolute inset-0 bg-gray-900/80 p-6 transition-all duration-300 group-hover:bg-gray-900/60">
                                <div className="flex h-full flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-50">Project 3</h3>
                                        <p className="mt-2 text-sm text-gray-300">A mobile app for tracking fitness goals.</p>
                                    </div>
                                    <Link
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                                        href="#">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                <div
                    className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                        <p
                            className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll get back to you as soon
                            as possible.
                        </p>
                    </div>
                    <div className="mx-auto w-full max-w-sm space-y-2">
                        <form className="flex flex-col space-y-4">
                            <Input className="max-w-lg" placeholder="Name" type="text" />
                            <Input className="max-w-lg" placeholder="Email" type="email" />
                            <Textarea className="max-w-lg" placeholder="Message" />
                            <Button className="w-full" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
            <footer
                className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Mateus Koehler. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>)
    );
}
