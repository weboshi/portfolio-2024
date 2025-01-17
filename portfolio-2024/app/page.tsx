import Image from "next/image";
import Link from 'next/link';
import Navigation from "../components/Navigation";



export default function Home() {
  return (
    <main className="items-center main-container">

      <Navigation />
      <div className="sticky-note">
        <p className="text-center text-xl mb-5 font-bold">Welcome!</p>
        <p>My name is Andy and I am a Full Stack Web Developer that loves building apps.</p>
      </div>

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
      <div className="red-divider"></div>
    </main>
  );
}
