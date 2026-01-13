import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

function NewsPage() {
    return (
        <>
            <div className="text-center mb-10">
                <h1>Latest Articles</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Thoughtful journalism on today's most important topics
                </p>
            </div>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
}

export default NewsPage;
