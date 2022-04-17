const filterByCategory = (videos, category) => {
    if (category && category !== "All") {
        return [...videos].filter((item) => item.categoryName === category)
    }
    else {
        return videos;
    }


}

export { filterByCategory };