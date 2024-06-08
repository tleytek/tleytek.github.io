import Link from "next/link"

export default function Contact() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div
                className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                    <p
                        className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Have a project in mind, want to hire me, or just want to say hello? Send me an email at <strong>mateus@mateuskoehler.com</strong>
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="mailto:mateus@mateuskoehler.com">
                        Email
                    </Link>
                </div>
            </div>
        </section>
    )
}
