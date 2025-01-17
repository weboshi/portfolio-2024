import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";


export default function Home() {
    return (
        <main className="items-center">
            <Navigation />
            <h1 className="notebook-header mb-10 mt-10">
                About
            </h1>
            <div className="red-divider"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="sticky-note">
                <p>Random facts</p>
                <ul>
                    <li>I enjoy weightlifting</li>
                    <li>I am lawyer turned developer</li>
                    <li>I have a corgi named Hotpot</li>
                </ul>
            </div>
        </main>
    );
}
