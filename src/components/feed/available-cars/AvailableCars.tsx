import Image from "next/image";
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { Phone } from 'lucide-react';
import styles from "./available-cars.module.css";

const cars = [
  {
    title: "2022 Hyundai Creta SX",
    price: "₹11.45L",
    fuel: "Diesel",
    km: "40,000 KM",
    owner: "1st Owner",
    location: "Karol Bagh",
  },
  {
    title: "2021 Maruti Suzuki Baleno Alpha",
    price: "₹7.20L",
    fuel: "Petrol",
    km: "32,500 KM",
    owner: "2nd Owner",
    location: "Dwarka",
  },
  {
    title: "2023 Tata Nexon XZ+",
    price: "₹10.90L",
    fuel: "Petrol",
    km: "18,200 KM",
    owner: "1st Owner",
    location: "Noida",
  },
  {
    title: "2020 Mahindra XUV700 AX5",
    price: "₹15.80L",
    fuel: "Diesel",
    km: "48,000 KM",
    owner: "1st Owner",
    location: "Gurugram",
  },
  {
    title: "2021 Kia Seltos HTX",
    price: "₹12.65L",
    fuel: "Diesel",
    km: "36,700 KM",
    owner: "2nd Owner",
    location: "Rohini",
  },
  {
    title: "2019 Honda City VX",
    price: "₹8.40L",
    fuel: "Petrol",
    km: "55,000 KM",
    owner: "1st Owner",
    location: "Janakpuri",
  },
  {
    title: "2022 Toyota Glanza G",
    price: "₹8.95L",
    fuel: "Petrol",
    km: "22,800 KM",
    owner: "1st Owner",
    location: "Lajpat Nagar",
  },
  {
    title: "2021 Maruti Suzuki Brezza ZXI",
    price: "₹9.80L",
    fuel: "Petrol",
    km: "29,400 KM",
    owner: "1st Owner",
    location: "Pitampura",
  },
];

export default function AvailableCars() {
  return (
    <section className={`layoutSection ${styles.listingFeed}`}>
      {cars.map((car, index) => (
        <article key={index} className={styles.vehicleCard}>
          <figure>
            <Image className={styles.vehicleImage} src="/car.webp" alt={car.title} width={800} height={450} draggable={false} priority={index < 2} />
          </figure>

          <div className={styles.vehicleHeader}>
            <h6 className={styles.vehicleTitle}>{car.title}</h6>
            <p className={styles.vehiclePrice}>{car.price}</p>
          </div>

          <ul className={styles.vehicleSpecs}>
            <li className={styles.vehicleSpec}>{car.fuel}</li>
            <li className={styles.vehicleSpec}>{car.km}</li>
            <li className={styles.vehicleSpec}>{car.owner}</li>
            <li className={styles.vehicleSpec}>{car.location}</li>
          </ul>

          <ul className={styles.vehicleActions}>
            <li>
              <a href="###" className="buttonSecondary callDealerButton">
                <Phone className="icon-phonecall" strokeWidth={1.75} size={20} />
                <span className="btnLabel">Call Dealer</span>
              </a>
            </li>
            <li>
              <a href="###" className="buttonPrimary whatsAppButton">
                <IconBrandWhatsapp className="icon-whatsapp" stroke={1.75} size={20} />
                <span className="btnLabel">WhatsApp</span>
              </a>
            </li>
          </ul>
        </article>
      ))}
    </section>
  );
}