import styles from "./LedgerCreation.module.css";
import Layout from "../components/layout/Layout";

export default function LedgerCreation() {
  return (
    <Layout>
      <div className={styles.testbox}>
        <form
          id="registrationForm"
          className={styles.form}
          action="/submit"
          method="post"
        >
          <div className={styles.banner}>
            <h1>Aaans Services Private Limited</h1>
          </div>
          <h2>Rule Engine Data Entry from C1 to C5</h2>
          <div className={styles.columns}>
            <div className={styles.item}>
              <label for="fname">
                C5 (Ledger Name) <span>*</span>
              </label>
              <input
                styles={styles.input}
                id="fname"
                type="text"
                name="fname"
                required
              />
            </div>
            <div className={styles.item}>
              <label for="lname">
                C1 (Group) <span>*</span>
              </label>
              <input
                className={styles.input}
                id="lname"
                type="text"
                name="lname"
                required
              />
            </div>
            <div className={styles.item}>
              <label for="address1">
                C2 (Sub Group) <span>*</span>
              </label>
              <input
                className={styles.input}
                id="address1"
                type="text"
                name="address1"
                required
              />
            </div>
            <div className={styles.item}>
              <label for="eaddress">
                C3 (Ledger) <span>*</span>
              </label>
              <input
                className={styles.input}
                id="eaddress"
                type="text"
                name="eaddress"
                required
              />
            </div>
            <div className={styles.item}>
              <label for="esubaddress">
                C4 (Sub Ledger) <span>*</span>
              </label>
              <input
                className={styles.item}
                id="esubaddress"
                type="text"
                name="esubaddress"
                required
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonCreation} type="submit">
              Submit
            </button>
            <button className={styles.buttonCreation} type="reset">
              Reset
            </button>
            <button
              className={styles.buttonCreation}
              type="button"
              onclick="cancelForm()"
            >
              Cancel
            </button>
            <button
              className={styles.buttonCreation}
              type="button"
              onclick="driveForm()"
            >
              Drive Link
            </button>
          </div>
        </form>
        <div id="excelSheetContainer"></div>
      </div>
    </Layout>
  );
}
