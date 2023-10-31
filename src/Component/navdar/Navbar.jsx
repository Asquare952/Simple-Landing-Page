import styles from './Navbar.module.css'
const Navbar = () => {
  return ( 
     <header>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.navbar}>
      <a href="/" className={styles.navItems}>Home</a>
      <a href="/" className={styles.navItems}>About</a>
      <a href="/" className={styles.navItems}>Projects</a>
      <a href="/" className={styles.navItems}>Contact</a>
      <a href="/" className={styles.navItems}>Courses</a>
      <a href="/" className={styles.navItems}>Blog</a>
      </nav>
     </header>
   );
}
 
export default Navbar;
