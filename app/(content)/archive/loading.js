function ArchiveLoading() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumbs */}
            <div className="mb-8">
                <div className="skeleton skeleton-text mb-3" />
                <div className="skeleton skeleton-text short" />
            </div>

            {/* Header */}
            <header id="archive-header" className="mb-12">
                <div className="mb-10">
                    <div className="skeleton skeleton-title mb-3" />
                    <div className="skeleton skeleton-text" />
                </div>

                <div className="archive-buttons-container">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="skeleton skeleton-pill" />
                    ))}
                </div>
            </header>

            {/* News list */}
            <div className="mt-10">
                <div className="skeleton skeleton-subtitle mb-8" />

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
        </div>
    );
}

export default ArchiveLoading;
