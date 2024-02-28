import React from "react";
import styles from "@/app/plans.module.css";
import { MonitorCheck, StarHalf, BadgeRussianRuble } from "lucide-react";

type Feature = string;

type Plan = {
  name: string;
  price?: string;
  bestPlan: boolean;
  currency: string;
  features: Feature[];
};
const plans: Plan[] = [
  {
    name: "Premium",
    price: "£50",
    bestPlan: false,
    currency: "/ month",
    features: [
      "Access to all the offers",
      "At least extra 10% discounts at our partners' stores",
    ],
  },
  {
    name: "Diamond",
    price: "£75",
    bestPlan: true,
    currency: "/ month",
    features: [
      "Access to all the offers",
      "At least extra 20% discounts at our partners' stores",
    ],
  },
  {
    name: "Enterprise",
    currency: "Let's Talk!",
    bestPlan: false,
    features: [
      "Access to all the offers",
      "With a special price for many members",
    ],
  },
];

const Plans = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Plans</h1>
      <div className={styles.plans}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={plan.bestPlan ? styles.bestPlan : styles.plan}
          >
            <h2>{plan.name}</h2>
            <p>
              {plan.price} {plan.currency}
            </p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {/*if signed in --> subcribe; if not sign in --> sign in page , if not subscribe --> subscribe*/}
            <button>Get Started</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plans;
