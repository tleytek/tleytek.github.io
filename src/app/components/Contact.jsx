import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
    return (
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
    )
}
