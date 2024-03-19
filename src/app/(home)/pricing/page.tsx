import { PricingPlan } from "app/components/home/PricingPlan";
import styles from "../../../styles/Pricing.module.scss";

export default function Pricing() {
  const benefitsFree = [
    "Free Upload up to 50 documents",
    "Ilimited flashcards",
    "Ilimited translations",
    "Ilimited underlined words",
    "Acces to all grammar exercises",
    "Acces to all speaking exercises",
  ];

  const benefitsMonth = [
    "Month Upload up to 50 documents",
    "Ilimited flashcards",
    "Ilimited translations",
    "Ilimited underlined words",
    "Acces to all grammar exercises",
    "Acces to all speaking exercises",
  ];

  const benefitsAnnual = [
    "Year Upload up to 50 documents",
    "Ilimited flashcards",
    "Ilimited translations",
    "Ilimited underlined words",
    "Acces to all grammar exercises",
    "Acces to all speaking exercises",
  ];
  return (
    <>
      <h1>Pricing</h1>
      <p className="ST center">Choose a subscription plan that suits your needs.</p>
      <div className={styles.pricingPlansContainer}>
        <PricingPlan
          benefits={benefitsFree}
          price= "0$ /month"
          name = "Free Plan"
          periodicity= "No payment"
          cardTypeRecommended={false}
        />
        <PricingPlan
          benefits={benefitsMonth}
          name = "Month Plan"
          price={"7$ /month"}
          periodicity={"Montly payment"}
          cardTypeRecommended={true}
        />
        <PricingPlan
          benefits={benefitsFree}
          name = "Lenguage lover"
          price={"70$ /year"}
          periodicity={"Annual payment"}
          cardTypeRecommended={false}
        />
      </div>
    </>
  );
}
