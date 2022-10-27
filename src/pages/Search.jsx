export const Search = ({search, setSearch}) => {
    return (
        <form action="/" method="get">
        <input
            type="text"
            value={search}
            onInput={e => setSearch(e.target.value)}
            placeholder="Poké finder..."
        />
        <button type="submit">Go !</button>
    </form>
    )
}