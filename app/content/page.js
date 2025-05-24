// /app/content/page.js
import Link from "next/link";

export default async function Content() {
  // Fetching data from the API route
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/content`;
  let res;
  try {
    res = await fetch(apiUrl, {
      cache: "no-store",
    });
  } catch (err) {
    console.error("Fetch error:", err, apiUrl);
    return <div>Error loading contents...</div>;
  }

  if (!res || !res.ok) {
    console.error("API response error:", res && res.status, apiUrl);
    return <div>Error loading contents...</div>;
  }

  const contents = await res.json();

  return (
    <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
        Our{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
          Daily Contents
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {contents.map((content) => (
          <div
            key={content._id}
            className="bg-slate-700 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-2"
          >
            <Link target="_blank" href={`/content/${content._id}`}>
              <h2 className="text-xl sm:text-2xl font-semibold">
                {content.title}
              </h2>
            </Link>
            <div className="flex flex-col justify-center items-start gap-1">
              <span className="text-sm sm:text-base">
                Posted on:{" "}
                {new Date(content.createdAt).toLocaleDateString("en-GB")}
              </span>
              <Link target="_blank" href={`/content/${content._id}`}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  View in Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 sm:mt-8 font-semibold text-base sm:text-lg">
        For more contents, visit our{" "}
        <Link
          className="text-purple-500 hover:underline"
          target="_blank"
          href="https://www.instagram.com/iemgenai?igsh=MTRhMTdnYzVxcXB5NA=="
        >
          Instagram
        </Link>{" "}
        page.
      </div>
    </div>
  );
}

export const metadata = {
  title: "IEM Generative AI CoE - Contents",
  description:
    "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};
