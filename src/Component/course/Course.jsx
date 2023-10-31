import styles from "./Course.module.css";
import Courses from "../../courses";
const Course = () => {
  return (
    <>
      {/* passing props */}
      <section className={styles.courseSection}>
        <h2 className={styles.courseTitle}>Courses</h2>
        <section className={styles.courseContainer}>
          {Courses.map((course) => (
            <section className={styles.course} id={course.id}>
              <section className={styles.courseContent}>
                <h3>{course.courseTitle}</h3>
                <p>{course.CourseDescription}</p>
                <div className={styles.btn}>
                  <button>Apply</button>
                  <button>View</button>
                </div>
              </section>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default Course;
