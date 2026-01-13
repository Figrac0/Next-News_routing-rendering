// "use client";

// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

async function NewsPage() {
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();
    // const [news, setNews] = useState();

    // const response = await fetch("http://localhost:8080/news");

    // if (!response.ok) {
    //     throw new Error("Failed to fetch news");
    // }

    // const news = await response.json();

    // useEffect(() => {
    // async function fetchNews() {
    //     setIsLoading(true);
    //     const response = await fetch("http://localhost:8080/news");

    //     if (!response.ok) {
    //         setError("Failed to fetch news.");
    //         setIsLoading(false);
    //     }

    //     const news = await response.json();

    //     setIsLoading(false);
    //     setNews(news);
    // }

    // fetchNews();
    // }, []);

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }
    // if (error) {
    //     return <p>{error}</p>;
    // }

    // let newsContent;

    // if (news) {
    //     newsContent = <NewsList news={news} />;
    // }

    const news = await getAllNews();

    return (
        <>
            <div className="text-center mb-10">
                <h1>Latest Articles</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Thoughtful journalism on today's most important topics
                </p>
            </div>
            {/* {newsContent} */}
            <NewsList news={news} />
        </>
    );
}

export default NewsPage;
