const filterByCategory = (videos, category) => {
    if (category === "Art") {
        return [...videos].filter((item) => item.categoryName === "Art");
    }
    else if (category === "Animated Series") {
        return [...videos].filter((item) => item.categoryName === "Animated Series");
    }
    else if (category === "Indie Music") {
        return [...videos].filter((item) => item.categoryName === "Indie Music");
    }
    else if (category === "Movies") {
        return [...videos].filter((item) => item.categoryName === "Movies");
    }
    else if (category === "Current Affairs") {
        return [...videos].filter((item) => item.categoryName === "Current Affairs");
    }
    else {
        return videos;
    }

}

export { filterByCategory };