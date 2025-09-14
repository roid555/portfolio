export default function ContactMe() {
  return (
    <section id="contact" className="w-full py-20 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          I'm currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hi, feel free to reach out!
        </p>
        <a
          href="mailto: Roi8542@gmail.com"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
