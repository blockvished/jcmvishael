import Blogs from "@/components/blogs";
import Container from "@/components/container";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

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
        <Contact />
      </Container>
    </div>
  );
}
