import { LayoutGrid, CirclePlus, User } from 'lucide-react';
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`layoutSection ${styles.bottomNavigation}`} data-layout-footer>
        <button type="button" className={`${styles.navItem} ${styles.isActive}`}>
            <LayoutGrid className='navItemIcon' strokeWidth={1.75} /> 
            <span>Feed</span>
        </button>

        <button type="button" className={styles.navItem}>
            <CirclePlus className='navItemIcon' strokeWidth={1.75} />
            <span>Post</span>
        </button>

        <button type="button" className={styles.navItem}>
            <User className='navItemIcon' strokeWidth={1.75} />
            <span>Garage</span>
        </button>
    </footer>
  )
}
