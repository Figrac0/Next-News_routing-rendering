function NewsLoading() {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Page header */}
            <div className="text-center mb-10">
                <div className="skeleton skeleton-title mb-4 mx-auto" />
                <div className="skeleton skeleton-text mx-auto" />
            </div>

            {/* News list */}
            <ul className="news-list">
                {Array.from({ length: 6 }).map((_, i) => (
                    <li key={i} className="news-skeleton-card">
                        <div className="skeleton skeleton-image" />
                        <div className="skeleton skeleton-line" />
                        <div className="skeleton skeleton-line short" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsLoading;
