import Image from "next/image";
import styles from "./card.module.css";

const Card = ({ title, desc, img, cardClassNme }) => {
  return (
    <div className={`${styles.card} ${styles[cardClassNme] || cardClassNme}`}>
      <div className={styles.cardImg}>
        <Image src={img} alt={title ? title : desc} width={70} height={70} />
      </div>
      <div className={styles.cardContent}>
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
};

export default Card;
