const AboutPage = () => {
    return (
        <>
            <ul>
                {Array.from({ length: 100 }).map((_, i) => (
                    <li key={i}>About Page</li>
                ))}
            </ul>
        </>
    );
};

export default AboutPage;
