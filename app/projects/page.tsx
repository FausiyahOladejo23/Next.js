import Image from "next/image";

export default function Projects() {
    return (
        <main className="container">
            <h1>My Projects</h1>

            <section className="projects">
                <div className="project-card">
                    <Image
                        src="/project1.jpg"
                        alt="Todo Redux project"
                        width={400}
                        height={250}
                    />

                    <h2>Todo Redux</h2>

                    <p>
                        A task management application built with React, Redux and
                        TypeScript.
                    </p>
                </div>

                <div className="project-card">
                    <Image
                        src="/project2.jpg"
                        alt="Portfolio project"
                        width={400}
                        height={250}
                    />

                    <h2>Portfolio Website</h2>

                    <p>
                        A responsive portfolio website built using Next.js and CSS.
                    </p>
                </div>
            </section>
        </main>
    );
}