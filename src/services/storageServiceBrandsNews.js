const NEWS_KEY = 'my_news_data'
const BRANDS_KEY = 'my_brands_data'

export const initStorage = async () => {
    if (!localStorage.getItem(NEWS_KEY)) {
        try {
            const res = await fetch(`${import.meta.env.BASE_URL}news.json`)
            const data = await res.json()
            localStorage.setItem(NEWS_KEY, JSON.stringify(data))
        } catch (e) {
            console.error('Ошибка загрузки news.json:', e)
        }
    }

    if (!localStorage.getItem(BRANDS_KEY)) {
        try {
            const res = await fetch(`${import.meta.env.BASE_URL}brands.json`)
            const data = await res.json()
            localStorage.setItem(BRANDS_KEY, JSON.stringify(data))
        } catch (e) {
            console.error('Ошибка загрузки brands.json:', e)
        }
    }
}

export const getNews = () => {
    const data = localStorage.getItem(NEWS_KEY)
    return data ? JSON.parse(data) : []
}

export const createNews = (newsItem) => {
    const news = getNews()
    const maxId = news.reduce((max, item) => Math.max(max, item.id), 0)
    const newItem = { id: maxId + 1, ...newsItem }
    news.push(newItem)
    localStorage.setItem(NEWS_KEY, JSON.stringify(news))
    return newItem
}

export const updateNews = (id, updatedData) => {
    const news = getNews()
    const index = news.findIndex(item => item.id === id)
    if (index !== -1) {
        news[index] = { ...news[index], ...updatedData }
        localStorage.setItem(NEWS_KEY, JSON.stringify(news))
        return news[index]
    }
    return null
}

export const deleteNews = (id) => {
    const news = getNews()
    const filtered = news.filter(item => item.id !== id)
    localStorage.setItem(NEWS_KEY, JSON.stringify(filtered))
    return filtered
}


export const getBrands = () => {
    const data = localStorage.getItem(BRANDS_KEY)
    return data ? JSON.parse(data) : []
}

export const createBrand = (brandItem) => {
    const brands = getBrands()
    const maxId = brands.reduce((max, item) => Math.max(max, item.id), 0)
    const newItem = { id: maxId + 1, ...brandItem }
    brands.push(newItem)
    localStorage.setItem(BRANDS_KEY, JSON.stringify(brands))
    return newItem
}

export const updateBrand = (id, updatedData) => {
    const brands = getBrands()
    const index = brands.findIndex(item => item.id === id)
    if (index !== -1) {
        brands[index] = { ...brands[index], ...updatedData }
        localStorage.setItem(BRANDS_KEY, JSON.stringify(brands))
        return brands[index]
    }
    return null
}

export const deleteBrand = (id) => {
    const brands = getBrands()
    const filtered = brands.filter(item => item.id !== id)
    localStorage.setItem(BRANDS_KEY, JSON.stringify(filtered))
    return filtered
}