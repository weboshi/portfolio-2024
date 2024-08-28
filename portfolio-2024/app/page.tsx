import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="items-center">
      <div className="navbar bg-base-100">
        <div className="flex-1 justify-between px-10">
          <a className="font-bold text-xl">Andy's Simple Portfolio </a>
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li><Link href="/experience/">Experience</Link></li>
            <li><Link href="/experience/">Projects</Link></li>
            <li><Link href="/experience/">Bonus</Link></li>
          </ul>
        </div>

      </div>
    </main>
  );
}
