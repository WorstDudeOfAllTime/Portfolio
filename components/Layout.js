import styles from "../styles/Home.module.css";
import Image from "next/image";
import Me from "../public/img/MyHead-01.png";
import SocialBox from "./SocialBox";
import NavBar from "./NavBar";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <div className={styles.bioBox}>
      <div className={`${styles.picSide} ${styles.halves}`}>
        <div className={styles.picBox}>
          <Link href="/">
            <a>
              <Image className={styles.me} src={Me} />
            </a>
          </Link>
        </div>
      </div>
      <div className={`${styles.textSide} ${styles.halves}`}>
        <div className={styles.navBox}>
          <NavBar />
          <SocialBox />
        </div>
        <div className={styles.textContainer}>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
