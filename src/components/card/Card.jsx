import styles from'./card.module.css';

function Card(props) {

    return(
        <div className={styles.card}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.card_price}><span className={styles.currency}>руб</span> <span className={styles.price}>{props.price}</span>/мес</div>
            <p className={styles.info}>{props.info}</p>
            <p className={styles.traffic}>{props.traffic}</p>
        </div>
    )

}

export default Card;