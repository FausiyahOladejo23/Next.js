import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <h1>Hello, I'm Dami</h1>

          <h2>Computer Engineering Student & Software Developer</h2>

          <p>
            I am passionate about software engineering, artificial
            intelligence, cybersecurity and emerging technologies.
          </p>

          <div className="buttons">
            <Link href="/projects" className="button">
              View My Projects
            </Link>

            <Link href="/contact" className="button secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <Image
          src="/profile.jpg"
          alt="Profile picture"
          width={250}
          height={250}
          className="profile"
        />
      </section>
    </main>
  );
}