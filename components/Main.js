import Image from "next/image";
import styles from "../styles/Main.module.css";
import Me from "../public/img/MyHead-01.png";
import SocialBox from "./SocialBox";
import NavBar from "./NavBar";
const Main = () => {
  return (
    <div className={styles.bioBox}>
      <div className={`${styles.picSide} ${styles.halves}`}>
        <div className={styles.picBox}>
          <Image className={styles.me} src={Me} />
        </div>
      </div>
      <div className={`${styles.textSide} ${styles.halves}`}>
        <div className={styles.textContainer}>
          <h1 className={styles.hello}>HELLO.</h1>
          <h2 className={styles.myName}>I'M KRIS.</h2>

          <NavBar />
          <SocialBox />
        </div>
      </div>
    </div>
  );
};

export default Main;
