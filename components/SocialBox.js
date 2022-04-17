import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SocialBox.module.css";
import Github from "../public/img/icons8-github-128.png";
import Instagram from "../public/img/icons8-instagram-128.png";
import Twitter from "../public/img/icons8-twitter-128.png";
import LinkedIn from "../public/img/icons8-linkedin-128.png";

const SocialBox = () => {
  return (
    <div className={styles.socialBar}>
      <Link href="https://github.com/WorstDudeOfAllTime">
        <a>
          <Image width={60} height={60} src={Github} />
        </a>
      </Link>
      <Link href="https://www.instagram.com/worstdudeofalltime/">
        <a>
          <Image
            width={60}
            height={60}
            className={styles.socialIcon}
            src={Instagram}
          />
        </a>
      </Link>
      <Link href="https://twitter.com/WorstDudeOfall">
        <a>
          <Image
            width={60}
            height={60}
            className={styles.socialIcon}
            src={Twitter}
          />
        </a>
      </Link>
      <Link href="#">
        <a>
          <Image
            width={60}
            height={60}
            className={styles.socialIcon}
            src={LinkedIn}
          />
        </a>
      </Link>
    </div>
  );
};
export default SocialBox;
