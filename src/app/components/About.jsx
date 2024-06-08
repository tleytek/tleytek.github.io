export default function About() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div
                className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                    <p
                        className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        If you want to chat with me, send me an email, but to fill the void until then, I&apos;ll tell you a bit more about me.
                    </p>
                    <p
                        className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        I really enjoy playing video games, mainly PvP MMO&apos;s. I like making tools for them that can help
                        collect and organize the game data to allow for easy and quick information look ups. Collecting that data
                        by any means necessary (within the games TOS), whether it is packet sniffing, OpenCV image detection, or given by the developers via an HTTP API.
                        That fixation on collecting data is going to be the goal of most side projects I do.
                    </p>
                    <p
                        className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Besides my project aspirations, I like to watch anime, play around with 3D printing (Ender 3 and Prusa Mk3), and continue to dail in keyboard and workflow ergonomics.
                    </p>
                </div>
            </div>
        </section>
    )
}
