import { Button } from "app/components/shared/Button";
import styles from "./PricingPlan.module.scss";
import Image from "next/image";
import Link from "next/link";


interface PricingPlanProps {
  benefits: string[];
  price: string,
  name: string,
  periodicity: string,
  cardTypeRecommended: boolean;
}

export const PricingPlan: React.FC<PricingPlanProps> = ({ benefits, price, cardTypeRecommended, periodicity,name }) => {

  const checkIconURL = cardTypeRecommended ? "/icons/checkIconRecommended.svg" : "/icons/checkIcon.svg";
  const titleText = cardTypeRecommended ? "Most Common" : "Recommended";

  return (
    <div className={cardTypeRecommended ? styles.cardTypeRecommended : styles.pricingPlan }>
      <div className={styles.title}>
        {cardTypeRecommended? 
        <p style={{ textAlign: "right", fontWeight:700, marginBottom: 8,}}>{titleText}</p>:<></>}
        <h5>{name}</h5> 
        <p>{periodicity}</p>
      </div>
      <h5 className={styles.price}>{price}</h5>
      <Link href={"/register"}><Button text="Choose plan"/></Link>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>
            <Image src={checkIconURL} alt="checkIcon" width={24} height={24}/>
            {benefit}
          </li>
        ))}
      </ul>
      <Link href={"/termsOfUse"} className={cardTypeRecommended? styles.linkColorRecommended : styles.linkColor}>Check terms and conditions</Link>
    </div>
  );
};