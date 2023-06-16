import { useState } from "react"

const Categories = ({value ,onClickCategory}) => {
   // const [activeCategory, setActiveCategory] = useState(1)

    const categories = [
        { id: 0, name: 'All' },
        { id: 1, name: 'Sneakers' },
        { id: 2, name: 'Gumshoes' },
        { id: 3, name: 'Sports' },
        { id: 4, name: 'Summer' },
        { id: 5, name: 'Winter' },
    ]

    // const onClickCategory = (index) => {
    //     setActiveCategory(index)
    // }

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName) => {
                       return <li onClick={() => onClickCategory(categoryName.id)} key={categoryName.id} className={value === categoryName.id ? "active" : ""}>{categoryName.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories