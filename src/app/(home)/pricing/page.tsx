import { PricingPlan } from "app/components/home/PricingPlan";
import styles from "./Pricing.module.scss";

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
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Pricing</h1>
          <h5 className={styles.subtitle}>
            Choose a subscription plan that suits your needs.
          </h5>
        </div>
        <div className={styles.pricingPlanContainer}>
          <PricingPlan
            benefits={benefitsFree}
            price={"Free"}
            periodicity={"No payment"}
            cardTypeRecommended={false}
          />
          <PricingPlan
            benefits={benefitsMonth}
            price={"7$ /month"}
            periodicity={"Montly payment"}
            cardTypeRecommended={true}
          />
          <PricingPlan
            benefits={benefitsFree}
            price={"70$ /year"}
            periodicity={"Annual payment"}
            cardTypeRecommended={false}
          />
        </div>
      </div>
    </main>
  );
}
