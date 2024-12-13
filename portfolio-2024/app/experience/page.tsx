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
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium flex justify-between">
                        <h2>Redymr - Web & Mobile App Developer</h2><h2>September 2024 - November 2024</h2>
                        <span className="italic font-light text-base">Web Developer</span>
                        </div>
                    <div className="collapse-content">
                        <ul>
                            <li>
                            Redesigned pages to enhance user experience and flow
                            </li>
                            <li>
                            Optimized pages to improve load times and meet web standards
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        <span className="text-xl block">Revel Systems - <a href="revelsystems.com">www.revelsystems.com</a></span>
                        <span className="italic font-light text-base">Web Developer</span>
                        </div>
                    <div className="collapse-content">
                    <ul>
                        <li>Built out responsive pages on WordPress, integrating custom themes and plugins</li>
                        <li>Integrated APIs to showcase customer reviews, feedback and news releases</li>
                        <li>Tested and optimized website pages for loading speed, Core Web Vitals, cross-browser
                        functionality and ADA compliance</li>
                        <li>Built deployment pipelines to AWS with Terraform</li>
                        <li>Migrated site from Wordpress to Nuxt 3.x</li>
                        <li>Developed an interactive hardware page to support sales by showcasing company products</li>
                        <li>Received Q3 2020 Sapphire Award for leading the redesign and building of hardware page</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Web & Software Development Instructor - Zenith Prep Academy </div>
                    <div className="collapse-content">
                        <p>Instructed students in JavaScript, PHP , HTML, CSS, jQuery, MySQL, APACHE, XAMPP</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
