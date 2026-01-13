function ArchiveLayout({ archive, latest }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="mb-4">Browse Archives</h1>
                <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Navigate through our complete collection of stories,
                    organized chronologically for your convenience
                </p>
            </div>
            <section id="archive-filter" className="mb-16">
                {archive}
            </section>
            <section id="archive-latest">{latest}</section>
        </div>
    );
}

export default ArchiveLayout;
