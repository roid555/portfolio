export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 border-b border-white/10">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-8">
          I'm Roi Dahan, a passionate software developer with a knack for
          creating dynamic and responsive web applications. With a strong
          foundation in both front-end and back-end technologies, I thrive on
          turning complex problems into elegant solutions. When I'm not coding,
          you can find me exploring the latest tech trends or hiking in nature.
        </p>
        <a
          href="#contact"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
