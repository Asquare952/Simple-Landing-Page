import styles from "./Form.module.css"
const emailAddress = () => {
  return (
    <section className={styles.form}>
      <section className={styles.formContainer}>
        <form>
          <input type="text" placeholder="Enter Email Address" />
        </form>
        <button className={styles.btn}>Subscribe</button>
      </section>
    </section>
  );
}
 
export default emailAddress;