import Image from "next/image";

export default function Home() {
    return (
        <main className="items-center">
            <div className="navbar bg-base-100">
                <div className="flex-1 justify-between px-10">
                    <a className="font-bold text-xl">Andy's Simple Portfolio </a>
                    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                        <li><a>Experience</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Bonus</a></li>
                    </ul>
                </div>
            </div>
            <h1 className="mb-10">
                Work Experience
            </h1>
            <div className="container mx-auto">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Web Developer - Revel Systems </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Web & Software Development Instructor - Zenith Prep Academy </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
