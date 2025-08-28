import ContactForm from "@/components/contact-form";
import Container from "@/components/container";
import FindMe from "@/components/findme";
import React from "react";

function Contact() {
  return (
    <>
      <Container>
        <FindMe />
      </Container>
      <div className="text-center w-full pb-10 my-5 md:px-24 border border-gray-200 dark:border-gray-800 text-black dark:text-white rounded-lg">
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
