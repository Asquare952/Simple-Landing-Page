import styles from "./Footer.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* row-1 */}
          <div className={styles.footerCol}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>
          {/* row-2 */}
          <div className={styles.footerCol}>
            <h4>Courses</h4>
            <ul>
              <li>
                <a href="#">Fullstack Development</a>
              </li>
              <li>
                <a href="#">Frontend Development</a>
              </li>
              <li>
                <a href="#">Backend Development</a>
              </li>
              <li>
                <a href="#">Product Design</a>
              </li>
              <li>
                <a href="#">Data Science</a>
              </li>
            </ul>
          </div>
          {/* row-3 */}
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          {/* row-4 */}
          <div className={styles.footerCol}>
            <h4>Address & Contact</h4>
            <p>15, Sadiku Street, Shogunle Lagos State.</p>
            <p>+234 913 713 9186</p>
          </div>
        </div>
        <hr />
        <section className={styles.copyRight}>
          <p>&copy Marusoft Technologies Limited</p>
        </section>
      </div>
    </footer>
  );
};

export default footer;
