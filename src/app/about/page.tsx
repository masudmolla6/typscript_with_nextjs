import Title from "@/components/Title";
import Link from "next/link";

const About = () => {
    return (
        <div>
            <Title>Welcome to our about.</Title>
            <nav className="text-center">
                <Link className="px-10" href="/about/contacts">Contacts</Link>
                <Link className="px-10" href="/about/teams">Teams</Link>
            </nav>
        </div>
    );
};

export default About;