function LoadingNewsItem() {
    return (
        <div className="container mx-auto px-4 py-10">
            <article className="news-article">
                {/* Image */}
                <div className="skeleton skeleton-image mb-8" />

                {/* Title */}
                <div className="skeleton skeleton-title mb-4" />

                {/* Meta */}
                <div className="skeleton skeleton-text short mb-10" />

                {/* Content */}
                <div className="space-y-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className={`skeleton skeleton-line ${
                                i % 3 === 2 ? "short" : ""
                            }`}
                        />
                    ))}
                </div>
            </article>
        </div>
    );
}

export default LoadingNewsItem;
