import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (value) => {


        if (categories.includes(value.trim())) return

        setCategories([...categories, value])
    }

    /*     <li key={Math.random()}>{category}</li>) */
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory}></AddCategory>
            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category}>
                    </GifGrid>
                )
            }
        </>
    )
}

export default GifExpertApp
