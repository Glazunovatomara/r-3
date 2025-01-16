import styles from'./card.module.css';
import PropTypes from 'prop-types';

function Card(props) {
    const {title, price, info, traffic, color} = props;

    const topic = `${styles.title} ${styles[color]}`;
    let card = `${styles.card}`

    if(price === "550") {
        card = `${styles.card} ${styles.card_better}`
    };

    return(
        <div className={card}>
            <h2 className={topic}>{title}</h2>
            <div className={styles.card_price}><span className={styles.currency}>руб</span> <span className={styles.price}>{price}</span>/мес</div>
            <p className={styles.info}>{info}</p>
            <p className={styles.traffic}>{traffic}</p>
        </div>
    );
};

Card.propTypes= {
    title: PropTypes.string,
    price: PropTypes.string,
    info: PropTypes.string,
    traffic: PropTypes.string,
    color: PropTypes.string,
};

export default Card;