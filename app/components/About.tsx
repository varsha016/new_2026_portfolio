import AnimationWrapper from "./AnimationWrapper";

export default function About() {
    return (
        <AnimationWrapper>

            <section className="py-16 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>

                <p className="text-gray-300 leading-relaxed">
                    I'm a Full Stack Developer with around 2.6 years of experience building modern,
                    responsive web applications. I work primarily with React.js, Next.js, Node.js,
                    and MongoDB, focusing on creating smooth user experiences and clean backend logic.

                    I enjoy turning complex problems into simple, functional interfaces and continuously
                    improving my skills by working on real-world projects.
                </p>
            </section>
        </AnimationWrapper>
    );
}