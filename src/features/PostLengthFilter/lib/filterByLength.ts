const filterMap = {
    title_up: (posts) => {
        return [...posts].sort((a,b) => a.title.length - b.title.length);
    },
    title_down: (posts) => {
        return [...posts].sort((a,b) => b.title.length - a.title.length);
    }
}

export const filterByLength = (posts, filter) => {
    const filteredPosts = filterMap[filter];
    return filteredPosts ? filteredPosts(posts) : posts;
}