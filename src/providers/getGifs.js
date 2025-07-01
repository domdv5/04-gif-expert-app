const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=H4CKNWlFVgZ69tUkFI8F0rzeYrVIRotY&q=${category}&limit=5`

    const response = await fetch(url)

    const { data } = await response.json()


    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({ id, title, url }))


    return gifs
}

export { getGifs }