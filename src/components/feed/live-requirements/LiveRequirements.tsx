import { Phone } from "lucide-react";
import styles from "./live-requirements.module.css";

const requirements = [
  {
    title: "Need Toyota Fortuner 2021 White",
    location: "Karol Bagh",
    budget: "₹32.00L",
    posted: "12m ago",
  },
  {
    title: "Looking for Hyundai Creta SX(O) 2022 Petrol AT",
    location: "Pitampura",
    budget: "₹15.80L",
    posted: "21m ago",
  },
  {
    title: "Urgently Need Maruti Swift ZXI 2020 Automatic",
    location: "Rohini",
    budget: "₹6.75L",
    posted: "34m ago",
  },
  {
    title: "Need Mahindra Scorpio-N Z8 Diesel 2023",
    location: "Janakpuri",
    budget: "₹20.50L",
    posted: "48m ago",
  },
  {
    title: "Looking for Honda City ZX CVT 2021",
    location: "Laxmi Nagar",
    budget: "₹11.20L",
    posted: "56m ago",
  },
  {
    title: "Need Tata Nexon XZ+ Diesel 2022",
    location: "Dwarka",
    budget: "₹10.90L",
    posted: "1h ago",
  },
  {
    title: "Looking for Kia Seltos GTX+ Automatic",
    location: "Paschim Vihar",
    budget: "₹15.10L",
    posted: "1h ago",
  },
  {
    title: "Need Toyota Innova Crysta 2020 Diesel",
    location: "Uttam Nagar",
    budget: "₹19.50L",
    posted: "1h 18m ago",
  },
  {
    title: "Looking for MG Hector Sharp CVT 2022",
    location: "Ashok Vihar",
    budget: "₹16.20L",
    posted: "1h 35m ago",
  },
  {
    title: "Need Maruti Baleno Alpha 2023",
    location: "Model Town",
    budget: "₹8.40L",
    posted: "2h ago",
  },
  {
    title: "Looking for BMW 320d Luxury Line 2019",
    location: "Rajouri Garden",
    budget: "₹24.00L",
    posted: "2h 20m ago",
  },
  {
    title: "Need Mahindra XUV700 AX7 Diesel AT",
    location: "Preet Vihar",
    budget: "₹22.80L",
    posted: "2h 45m ago",
  },
];

export default function LiveRequirements() {
  return (
    <section className={`layoutSection ${styles.liveRequirementsSection}`} >
    {requirements.map((item, index) => (
        <article className={styles.requirementCard} key={index}>
        <h6 className={styles.requirementTitle}>{item.title} - {item.location}</h6>

        <ul className={styles.requirementMetaList}>
            <li className={styles.requirementBudget}>Max Budget: {item.budget}</li>
            <li className={styles.requirementPostedTime}> Posted: {item.posted}</li>
        </ul>

        <a href="#" target="_blank" rel="noopener noreferrer" className={`buttonPrimary whatsAppButton ${styles.contactSellerButton}`}>
            <Phone strokeWidth={1.75} size={20} className="icon-whatsapp" />
            <span className="btnLabel">I Have This Car</span>
        </a>
        </article>
    ))}
    </section>
  );
}