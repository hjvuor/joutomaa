import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 flex justify-between items-center w-full bg-black-800 text-white p-4 z-50 shadow-md border-b">
          <div className="text-2xl font-bold">
            <Link href="/">Joutomaa</Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
            <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
            <Link href="/feed" className="hover:bg-gray-700 px-3 py-2 rounded-md">Feed</Link>
            <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
          </nav>
        </header>
      );
};
