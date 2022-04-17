import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  return (
    <div className={styles.listBox}>
      <ul className={styles.navigation}>
        <Link href="/nav/portfolio">
          <a>
            {" "}
            <li>Portfolio.</li>
          </a>
        </Link>
        <Link href="/nav/art">
          <a>
            {" "}
            <li>Art.</li>
          </a>
        </Link>
        <Link href="/nav/biography">
          <a>
            {" "}
            <li>Bio.</li>
          </a>
        </Link>
        <Link href="/nav/contact">
          <a>
            {" "}
            <li>Contact.</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
