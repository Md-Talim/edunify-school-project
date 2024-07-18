import Link from "next/link";
import "./navbar.css";

interface Props {
  title: string;
  linkTitle: string;
  link: string;
}

const Navbar = ({ title, linkTitle, link }: Props) => {
  return (
    <nav className="top-bar">
      <h1>{title}</h1>
      <Link href={link} className="btn-navigation">
        {linkTitle}
      </Link>
    </nav>
  );
};

export default Navbar;
