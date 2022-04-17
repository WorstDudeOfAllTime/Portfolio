import styles from "../styles/ProjectBlock.module.css";
import Image from "next/image";

const ProjectBlock = ({ src, description }) => {
  return (
    <div className={styles.frame}>
      <div className={styles.projectPic}>
        <Image src={src}></Image>
      </div>
      <div className={styles.projectDis}>{description}</div>
    </div>
  );
};

export default ProjectBlock;
