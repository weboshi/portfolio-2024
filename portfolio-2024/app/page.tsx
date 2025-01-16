import Image from "next/image";
import Link from 'next/link';
import Navigation from "../components/Navigation";



export default function Home() {
  return (
    <main className="items-center main-container">

      <Navigation />
      <div className="sticky-note font-bold">
        <p className="text-center mb-5">Welcome!</p>
        <p>My name is Andy and I am a Full Stack Web Developer that works with the MongoDB, Express, React and Node (MERN).</p>
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
