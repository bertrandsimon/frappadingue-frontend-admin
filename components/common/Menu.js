import styles from '../../styles/Menu.module.css';

function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>courses</div>
      <div> | </div>
      <div className={styles.item}>clients</div>
      <div> | </div>
      <div className={styles.item}>equipes</div>
      <div> | </div>
      <div className={styles.item}>commandes</div>
    </div>
  );
}

export default Menu;
