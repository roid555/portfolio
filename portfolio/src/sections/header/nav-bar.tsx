import Image from "next/image";
export default function NavBar() {
  return (
    <nav className=" flex justify-between items-center  ">
      <div className="flex items-center ">
        <Image
          src="/logo1.png"
          alt="Logo"
          width={27}
          height={27}
          className="rounded-full px-0 mx-0 "
        />
        <div className="text-lg font-bold px-0 mx-0">oi Dahan</div>
      </div>
      <div className="flex space-x-4">
        <a href="#about" className="px-3 py-1">
          About
        </a>
        <a href="#projects" className="px-3 py-1">
          Projects
        </a>
        <a
          href="#contact"
          className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
