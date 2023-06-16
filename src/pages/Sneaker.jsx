import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from "./Sneaker.module.scss";

const Sneaker = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [activeSize, setActiveSize] = useState(0)

    useEffect(() => {
        axios
            .get(`https://6474cf957de100807b1bcc4f.mockapi.io/items?id=${id}`)
            .then(res => {
                setItem(res.data[0]);
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }, [id]);

    const onClickSneakerSize = (index) => {
        setActiveSize(index);
    }

    const onClickBuyButton = (index) => {
        console.log('to checkout')
    }

    if (!item.title || !item.sizes) {
        // Data is still loading or not available
        return null; // or render a loading indicator
    }

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles["left-column"]}>
                    <h3 className={styles["left-heading"]}>{item.title}</h3>
                    <p className={styles.itemDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi labore quis at atque quo pariatur in architecto placeat a. Harum incidunt, natus consequatur mollitia quisquam tempore eaque debitis molestias!
                    </p>
                    <div className="sneaker-block__selector">
                        <ul>
                            {item.sizes.map((size, i) => (
                                <li
                                    key={i}
                                    className={activeSize === i ? "active" : ""}
                                    onClick={() => onClickSneakerSize(i)}
                                >
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sneaker-block__bottom">
                <div className="sneaker-block__price">Price:     {item.price} $</div>
                <button className="button button--outline button--add" onClick={onClickBuyButton}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Buy now</span>
                </button>
            </div>
                </div>
                <div className={styles["right-column"]}>
                    <img className={styles.sneakerimg} src={item.imageUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sneaker;