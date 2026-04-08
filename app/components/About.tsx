import AnimationWrapper from "./AnimationWrapper";

export default function About() {
    return (
        <AnimationWrapper>

            <section className="py-16 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>

                <p className="text-gray-300 leading-relaxed">
                    I’m a Full Stack Developer with around 3.2 years of experience building modern, responsive web applications.
                    I specialize in React.js, Next.js, Node.js, and MongoDB, and have hands-on experience with Redux Toolkit, Tailwind CSS,
                    Bootstrap, and Framer Motion to deliver smooth and engaging user interfaces.

                    I follow clean coding practices, implement proper validation, and use GitHub for efficient version control.
                    I enjoy solving complex problems and turning them into simple, user-friendly solutions.
                </p>
            </section>
        </AnimationWrapper>
    );
}