import School from "@/types/School";
import Image from "next/image";
import { schools } from "./data";
import "./page.css";

interface Props extends School {}

function SchoolCard({ name, address, city, image }: Props) {
  return (
    <article className="school-card">
      <Image
        src={image}
        alt={name}
        width={256}
        height={256}
        className="school-image"
      />
      <div className="info">
        <h3 className="truncate">{name}</h3>
        <p>{address}</p>
        <p>{city}</p>
      </div>
    </article>
  );
}

export default function SchoolsPage() {
  return (
    <main className="container">
      <h1>All Schools</h1>

      <div className="school-grid">
        {schools.map((school, index) => (
          <SchoolCard key={index} {...school} />
        ))}
      </div>
    </main>
  );
}
