export const searchUsers = async (searchQuery) => {
    const res = await fetch(`https://api.github.com/search/users?q=${searchQuery}`)
    const data = await res.json()
    
    return data.items
}