import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage({ params }) {
    const newsSlug = params.slug;
    // const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
    const newsItem = await getNewsItem(newsSlug);

    if (!newsItem) {
        notFound();
    }

    // Функция для форматирования текста с переносами строк
    const formatContent = (content) => {
        return content.split("\n\n").map((paragraph, index) => {
            // Проверяем, является ли абзац заголовком (первое слово с большой буквы, нет точки в конце, короткий)
            if (
                paragraph.split(" ").length < 6 &&
                !paragraph.includes(".") &&
                !paragraph.includes("?") &&
                !paragraph.includes("!")
            ) {
                return (
                    <h3
                        key={index}
                        className="text-xl font-bold mt-6 mb-3 text-gray-800">
                        {paragraph}
                    </h3>
                );
            }
            return (
                <p key={index} className="mb-4 leading-relaxed text-gray-700">
                    {paragraph}
                </p>
            );
        });
    };

    return (
        <article className="news-article max-w-4xl mx-auto px-4 py-8">
            <header className="mb-8">
                <Link href={`/news/${newsItem.slug}/image`}>
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                        className="w-full h-auto rounded-lg shadow-lg mb-6"
                    />
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {newsItem.title}
                </h1>
                <time
                    dateTime={newsItem.date}
                    className="text-gray-500 text-sm">
                    {new Date(newsItem.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </header>
            <div className="content text-lg leading-relaxed">
                {formatContent(newsItem.content)}
            </div>
        </article>
    );
}
