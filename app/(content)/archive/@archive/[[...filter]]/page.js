import Link from "next/link";
import { Suspense } from "react";

import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/news-list";
import {
    FilteredNewsSkeleton,
    FilterHeaderSkeleton,
} from "@/components/archive-skeletons";

async function FilterHeader({ year, month }) {
    const availableYears = await getAvailableNewsYears();
    let links = availableYears;
    let title = "Browse by Year";
    let description = "Select a year to view articles";

    if (
        (year && !availableYears.includes(year)) ||
        (month && !getAvailableNewsMonths(year).includes(month))
    ) {
        throw new Error("Invalid filter.");
    }

    if (year && !month) {
        links = getAvailableNewsMonths(year);
        title = `Articles from ${year}`;
        description = "Select a month to view specific articles";
    }

    if (year && month) {
        links = [];
        title = `Articles from ${getMonthName(month)} ${year}`;
        description = "Your selected articles";
    }

    return (
        <header id="archive-header" className="mb-12">
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                    {title}
                </h1>
                <p className=" text-gray-600 text-lg">{description}</p>
            </div>

            {links.length > 0 && (
                <nav className="mb-12">
                    <div className="archive-buttons-container">
                        {links.map((link) => {
                            const href = year
                                ? `/archive/${year}/${link}`
                                : `/archive/${link}`;

                            const isActive = year
                                ? month === link
                                : year === link;

                            const buttonClass = isActive
                                ? "archive-button archive-button-active"
                                : year
                                ? "archive-button archive-month-button"
                                : "archive-button archive-year-button";

                            return (
                                <Link
                                    key={link}
                                    href={href}
                                    className={buttonClass}>
                                    {year ? getMonthName(link) : link}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}
        </header>
    );
}

async function FilteredNews({ year, month }) {
    let news;
    if (year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = (
        <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                No articles found for this period
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
                Try selecting a different year or month from the options above.
            </p>
        </div>
    );

    if (news && news.length > 0) {
        newsContent = (
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-8 pb-4 border-b border-gray-200">
                    {news.length} Article{news.length > 1 ? "s" : ""} Found
                </h2>
                <NewsList news={news} />
            </div>
        );
    }

    return newsContent;
}

async function FilteredNewsPage({ params }) {
    const filter = params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Link
                        href="/archive"
                        className="hover:text-secondary transition-colors">
                        Archive
                    </Link>

                    {selectedYear && (
                        <>
                            <span className="mx-2 text-gray-400">›</span>
                            <Link
                                href={`/archive/${selectedYear}`}
                                className="hover:text-secondary transition-colors">
                                {selectedYear}
                            </Link>
                        </>
                    )}

                    {selectedMonth && (
                        <>
                            <span className="mx-2 text-gray-400">›</span>
                            <span className="text-gray-800 font-medium">
                                {getMonthName(selectedMonth)}
                            </span>
                        </>
                    )}
                </div>

                {(selectedYear || selectedMonth) && (
                    <Link
                        href={
                            selectedMonth
                                ? `/archive/${selectedYear}`
                                : "/archive"
                        }
                        className="inline-flex items-center text-secondary hover:text-accent font-medium transition-colors mb-6 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                            ←
                        </span>
                        Back to {selectedMonth ? selectedYear : " All Years"}
                    </Link>
                )}
            </div>
            <Suspense fallback={<FilterHeaderSkeleton />}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>

            <Suspense fallback={<FilteredNewsSkeleton />}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </div>
    );
}

function getMonthName(monthNumber) {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return monthNames[monthNumber - 1] || monthNumber;
}

export default FilteredNewsPage;
