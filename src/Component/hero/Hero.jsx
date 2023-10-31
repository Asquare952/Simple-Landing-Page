import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.left}>
        <h1 className={styles.tittle}>Marusoft software Development Program</h1>
        <p className={styles.description}>
          Welcome to Marusoft Academy where you will learn the most in-demand
          skills to become a world-class Software Engineer
        </p>
        {/* <button/> */}
        <div className={styles.btn}>
          <button>Learn More</button>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/IMG/coding.avif" alt="" style={{ width: "100%" }} />
      </div>
    </section>
  );
};

export default Hero;
