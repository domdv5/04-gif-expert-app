import { useState, useEffect, useRef } from "react"


const AddCategory = ({ onNewCategory }) => {



    const [inputValue, setInputValue] = useState('')

    const handleAddCategory = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewCategory(inputValue)
        setInputValue('')
    }

    return (
        <>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar Gif"
                    onChange={handleAddCategory}
                    value={inputValue}
                />
            </form>
        </>
    )
}

export default AddCategory
