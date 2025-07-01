import { useEffect, useState } from "react"
import { getGifs } from "../providers/getGifs"


/**
 * Custom React hook to fetch GIF images based on a given category.
 *
 * @param {string} category - The category to search GIFs for.
 * @returns {{ images: Array, isLoading: boolean }} An object containing the fetched images and loading state.
 */
const useFetchGifs = (category) => {

    const [gifData, setGifdata] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getImages = async () => {
        const images = await getGifs(category);
        setGifdata([...images])
        setIsLoading(false)
    }


    useEffect(() => {
        getImages()
    }, []);

    return { images: gifData, isLoading }
}

export default useFetchGifs
