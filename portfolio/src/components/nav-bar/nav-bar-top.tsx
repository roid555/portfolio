export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center border-b border-solid border-black/[.08] dark:border-white/[.145] pb-2 mb-8">
      <div className="text-lg font-bold">My Portfolio</div>
      <div className="flex space-x-4">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}
