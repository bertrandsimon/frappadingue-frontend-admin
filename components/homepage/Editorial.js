import styles from '../../styles/Editorial.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function Editorial() {
  return (
    <div className={styles.container}>
      <div><Image className={styles.editorialImg}   src="/images/editorial.png" width={343} height={343}/></div>
      
      <div className={styles.editorialTxt} >
        <h1 className='up'><span className='yellow'>la frappadingue</span> c'est quoi ?</h1>
        <br />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nostrum libero tenetur adipisci harum corporis aspernatur in itaque expedita atque inventore at tempore placeat modi repellat, vel, provident officiis voluptate.</span>
      </div>
    </div>
  );
}

export default Editorial;
