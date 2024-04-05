import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">EARTH</Link>
          <Link to="/moon">MOON</Link>
          <Link to="/mars">MARS</Link>
          <li>GALAXY</li>
          <Link to="/jupiter">JUPITER</Link>
          <Link to="/saturn">SATURN</Link>
          <Link to="/neptun">NEPTUN</Link>
        </ul>
      </nav>
    </>
  );
}
