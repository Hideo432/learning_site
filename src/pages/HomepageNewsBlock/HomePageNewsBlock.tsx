import { useEffect, useState } from "react";
import "./newsBlock.css";
import { Link } from "react-router-dom";
interface NewsItem {
  img: string;
  tag: string;
  title: string;
  description: string;
  main: boolean;
}

interface NewsState {
  mainNews: NewsItem | null;
  asideNews: NewsItem[];
}

export default function HomePageNewsBlock() {
  const [newsState, setNewsState] = useState<NewsState>({
    mainNews: null,
    asideNews: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/src/db/news.json");
        if (!response.ok) {
          throw new Error("Error fetching news");
        }
        const data: NewsItem[] = await response.json();

        const mainNews = data.find((item) => item.main) || null; // Находим основную новость
        const asideNews = data.filter((item) => !item.main).slice(0, 3); // Фильтруем и оставляем только 4 побочные новости

        setNewsState({ mainNews, asideNews });
      } catch (err) {
        setError("Error fetching news");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { mainNews, asideNews } = newsState;

  return (
    <section className="newsBlock-section">
      {mainNews && (
        <div style={{ position: "relative" }}>
          <img style={{ width: 640, height: 340 }} src={mainNews.img} />{" "}
          <div
            style={{ position: "absolute", marginTop: 36 }}
            className="news-tag-main"
          >
            {mainNews.tag}
          </div>
          <h2
            style={{
              fontSize: 26,
              position: "relative",
              paddingTop: 100,
              fontWeight: 600,
              lineHeight: "180%",
            }}
          >
            {mainNews.title}
          </h2>
          <p
            className="light_gray-text"
            style={{ fontSize: 20, lineHeight: "180%" }}
          >
            {mainNews.description}
          </p>
          <Link
            className="light_gray-text"
            style={{ fontSize: 20, lineHeight: "180%" }}
            to={"#"}
          >
            Read more
          </Link>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
        {asideNews.map((item, index) => (
          <div
            style={{ display: "flex", position: "relative", gap: 40 }}
            key={index}
          >
            <div style={{ position: "relative" }}>
              <img style={{ width: 280, height: 200 }} src={item.img}></img>
              <span className="news-tag">{item.tag}</span>
            </div>

            <div>
              <p style={{ fontSize: 22 }}>{item.title}</p>
              <p
                className="light_gray-text "
                style={{ fontSize: 20, letterSpacing: 1.5, lineHeight: "180%" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
