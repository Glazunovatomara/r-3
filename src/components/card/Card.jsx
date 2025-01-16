import styles from'./card.module.css';
import propTypes from 'prop-types';

function Card(props) {
    const {title, price, info, traffic, color} = props;

    

    return(
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.card_price}><span className={styles.currency}>руб</span> <span className={styles.price}>{price}</span>/мес</div>
            <p className={styles.info}>{info}</p>
            <p className={styles.traffic}>{traffic}</p>
        </div>
    );
};

Card.propTypes= {
    title: propTypes.string,
    price: propTypes.string,
    info: propTypes.string,
    traffic: propTypes.string,
    color: propTypes.string,
};

export default Card;