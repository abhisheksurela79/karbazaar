import Image from "next/image";
import LoginForm from "@/components/login/LoginForm";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { ShieldCheck, ChevronRight } from "lucide-react";
import styles from "./login.module.css";

export default function Login() {
  return (
    <section className={`layoutSection ${styles.dealerLoginSection}`}>
      <figure className={styles.brandIdentity}>
        <Image src="/karbazaar.svg" alt="Karbazaar logo" width={200} height={60} draggable={false} priority className={styles.brandLogo} />
        <span className={styles.dealerNetworkLabel}>India's Private Dealer Network</span>


        <div className={styles.verificationBanner}>
          <div className={styles.verification}>
            <ShieldCheck strokeWidth={1.75} />
          </div>

          <div className={styles.verificationContent}>
            <p className={styles.verificationTitle}>Verified Dealers Only</p>
            <span className={styles.verificationTagline}>Trusted. Verified. Connected.</span>
          </div>
        </div>
      </figure>

      <LoginForm />

      <div className="flex flex-col justify-start items-center h-full w-full px-sm">
        <div className={`animatedUnderlineGroup light ${styles.whatsAppAccessCard}`}>
          <figure className={styles.whatsAppIconContainer}>
            <IconBrandWhatsapp stroke={1.75} className={styles.whatsAppIcon} />
          </figure>

          <div className={styles.whatsAppContent}>
            <p className={styles.registrationPrompt}>Not a registered dealer?</p>

            <a href="http://" target="_blank" rel="noopener noreferrer" className={`animatedUnderlineGroupItem ${styles.whatsAppAccessLink}`}>Request Free Access via WhatsApp</a>
          </div>
          <ChevronRight strokeWidth={1.75} className={styles.whatsAppLinkIcon} />
        </div>
      </div>


      <ul className={styles.platformTrustList}>
        <li className={styles.platformTrustItem}>Secure</li>
        <li className={styles.platformTrustItem}>Private</li>
        <li className={styles.platformTrustItem}>Trusted</li>
      </ul>
    </section>
  );
}
