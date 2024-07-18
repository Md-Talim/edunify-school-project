import School from "@/types/School";
import Image from "next/image";

interface Props extends School {}

export function SchoolCard({ name, address, city, image }: Props) {
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
