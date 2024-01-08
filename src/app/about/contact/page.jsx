import { Form } from "./Form";

const Contact = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>

      <div className="mb-4 font-semibold">
        <span className="font-semibold mr-3" aria-label="Email address">
          Email:
        </span>
        <a
          href="mailto:definitelywebdev@yahoo.com"
          className="text-primary font-mono hover:text-primary-300 transition-all"
        >
          definitelywebdev@yahoo.com
        </a>
      </div>

      <div className="my-10" />

      <h2 className="text-2xl font-bold mb-4">Quick reply</h2>

      <Form />
    </section>
  );
};

export default Contact;
