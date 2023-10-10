import styles from './Card.module.css'
import cat01Img from './../../img/categories/cat-01.jpg'
import cat02Img from './../../img/categories/cat-02.jpg'
import cat03Img from './../../img/categories/cat-03.jpg'

const Card = () => {
    return ( 
          <div className={styles.card}>
            <img src={cat01Img} alt="cat01Img" />
            <img src={cat02Img} alt="cat02Img" />
            <img src={cat03Img} alt="cat03Img" />
          </div>
     );
}
 
export default Card;