import Link from "next/link";

export default function Footer() {
    return (
        <footer className="max-w-screen-2xl flex justify-between items-end text-green-600 p-1 z-50 sticky bottom-0 left-0">

            <svg className="w-8 h-8 text-green-600 p-0 animate-bounce" fill="currentColor" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
              <rect width={4} height={2} y={20}/>
            </svg>
            <Link className="text-xs" href='mailto:joutomaa.online@protonmail.com'>joutomaa.online@protonmail.com</Link>
          
        </footer>
      );
};
