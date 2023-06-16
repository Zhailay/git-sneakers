<<<<<<< HEAD
import { useState } from "react"

const SneakerBlock = ({title,imageUrl,price,sizes,types}) => {
    const [sneakerCount,setsneakerCount] = useState(0)
    const [activeSize,setActiveSize] = useState(0)

    const onClickAddButton = () => {
        setsneakerCount(sneakerCount+1)
    }
    const onClicksneakerSize = (index) => {
        setActiveSize(index)
    }
    // console.log(sneaker)
=======

const SneakerBlock = ({title,imageUrl,price,sizes,types}) => {
>>>>>>> 64891dd (Add Sneaker page)
    return (
        <div className="sneaker-block">
            <img
                className="sneaker-block__image"
                src={imageUrl}
                alt="sneaker"
            />
            <h4 className="sneaker-block__title">{title}</h4>
            <div className="sneaker-block__selector">
                <ul>
                    {sizes.map((size,i) =>
<<<<<<< HEAD
                        <li key={i} className={activeSize === i ? "active":""} onClick={()=>onClicksneakerSize(i)}>{size}</li>
=======
                        <li key={i}>{size}</li>
>>>>>>> 64891dd (Add Sneaker page)
                    )}
                </ul>
            </div>
            <div className="sneaker-block__bottom">
                <div className="sneaker-block__price">from {price} $</div>
<<<<<<< HEAD
                <button className="button button--outline button--add" onClick={onClickAddButton}>
=======
                <button className="button button--outline button--add">
>>>>>>> 64891dd (Add Sneaker page)
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
<<<<<<< HEAD
                    <span>Add</span>
                    <i>{sneakerCount}</i>
=======
                    <span>View</span>
>>>>>>> 64891dd (Add Sneaker page)
                </button>
            </div>
        </div>
    )
}

export default SneakerBlock