const RootPage = () => {
    return (
        <div>
            <ul>
                <li>Roasdasdasdasdadsdsot Page</li>
                {Array.from({ length: 10 }).map((_, i) => (
                    <li key={i}>Root Page</li>
                ))}
            </ul>
        </div>
    );
};

export default RootPage;
