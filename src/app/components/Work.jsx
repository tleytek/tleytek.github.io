import Link from "next/link"
import Image from "next/image"

export default function Work() {
    return (
        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
                            alt="Mortal Online 2 Fishing"
                            className="aspect-[16/11] lg:aspect-[16/12] w-full object-cover transition-all duration-300 group-hover:scale-105"
                            height="310"
                            src="/placeholder.svg"
                            width="550" />
                        <div
                            className="absolute inset-0 bg-gray-900/80 p-6">
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-50">Mortal Online 2 Fishing</h3>
                                    <p className="mt-2 text-sm text-gray-300">A eletron application for fishing and storing fishing information</p>
                                </div>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                                    href="https://github.com/tleytek/Mortal-Fishing"
                                    target="_blank">
                                    View Project
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl">
                        <Image
                            alt="Albion Black Market Helper"
                            className="aspect-[16/13] md:aspect-video lg:aspect-[16/12] w-full object-cover transition-all duration-300 group-hover:scale-105"
                            height="310"
                            src="/placeholder.svg"
                            width="550" />
                        <div
                            className="absolute inset-0 bg-gray-900/80 p-6">
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-50">Albion Black Market Helper</h3>
                                    <p className="mt-2 text-sm text-gray-300">A web app to calculate the black market efficiency based on current auction house data</p>
                                </div>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                                    href="https://github.com/tleytek/Albion-Tools-Alternate"
                                    target="_blank">
                                    View Project
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl">
                        <Image
                            alt="Smaller Dactyl"
                            className="aspect-[16/11] lg:aspect-[16/12] w-full object-cover transition-all duration-300 group-hover:scale-105"
                            height="310"
                            src="/placeholder.svg"
                            width="550" />
                        <div
                            className="absolute inset-0 bg-gray-900/80 p-6">
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-50">Smaller Dactyl</h3>
                                    <p className="mt-2 text-sm text-gray-300">A fork of the Dactyl Manuform Mini to have a thumb cluster like the Dactyl or Kinesis Advantage</p>
                                </div>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                                    href="https://github.com/tleytek/Smaller-Dactyl"
                                    target="_blank">
                                    View Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
