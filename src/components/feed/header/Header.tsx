import Link from "next/link";
import styles from "./header.module.css";

interface HeaderProps {
  activeTab: "cars" | "requirements";
}

export default function Header({ activeTab }: HeaderProps) {
  return (
    <header className={`layoutSection ${styles.marketplaceTabs}`} data-layout-header>
      <Link  href="/?tab=cars"  className={`${styles.marketplaceTabButton} ${activeTab === "cars" ? styles.isActive : ""}`}>Available Cars</Link>
      <Link  href="/?tab=requirements"  className={`${styles.marketplaceTabButton} ${activeTab === "requirements" ? styles.isActive : ""}`}>Live Requirements</Link>
    </header>
  );
}