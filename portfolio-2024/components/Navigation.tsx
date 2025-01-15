import Link from "next/link";


export default function Navigation() {
  return (
    <div className="navbar blue-border bg-base-100">
      <div className="flex-1 justify-between px-10">
        <Link className="font-bold text-xl" href="/">Andy's Portfolio </Link>
        <ul className="menu menu-vertical lg:menu-horizontal">
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
    </div>
  )
}