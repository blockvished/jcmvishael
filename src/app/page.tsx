import Blogs from "@/components/blogs";
import Container from "@/components/container";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import FindMe from "@/components/findme";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Container>
        <Intro />
      </Container>
      <Container>
        <Projects />
      </Container>
      <Container>
        <Blogs />
      </Container>
      <Container>
        <FindMe isButton={true} />
      </Container>
    </div>
  );
}
