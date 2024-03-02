const SvedenPage = () => {
    return (
        <ul>
            {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}>Sveden Page</li>
            ))}
        </ul>
    );
};

export default SvedenPage;
