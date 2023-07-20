import styles from '../../styles/ArgumentCard.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function ArgumentCard() {
  return (
    <div className={styles.container}>
      <h5 className='up'><span className='yellow'>10 courses</span> en france</h5> 
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laboriosam consequuntur mollitia delectus ea ipsa distinctio ullam consectetur dolores. Quasi velit corporis esse nam pariatur vel reiciendis natus magni nostrum?</span>
    </div>
  );
}

export default ArgumentCard;
