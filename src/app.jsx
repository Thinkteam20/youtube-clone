import { useEffect, useState } from "react";
import "./App.css";
import Aos from "aos";
import Header from "./components/header";
import Videos from "./components/videos";
import "aos/dist/aos.css";
const API_KEY = "AIzaSyAKpZ71aenK6nuDcMIu07KIm4Y9CQ5FCD4";

function App() {
    const [search, setSearch] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Aos.init();
        const getYoutubeAsync = async () => {
            const response = await fetch(
                // "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAKpZ71aenK6nuDcMIu07KIm4Y9CQ5FCD4",
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&key=${API_KEY}`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );
            const data = await response.json();
            setVideos(data.items);
            setLoading(false);
            return data;
        };
        const getYoutubeHotAsync = async () => {
            const response = await fetch(
                "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAKpZ71aenK6nuDcMIu07KIm4Y9CQ5FCD4",
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );
            const data = await response.json();
            setVideos(data.items);
            setLoading(false);
            return data;
        };

        if (search) {
            getYoutubeAsync().then((data) =>
                console.log(`search result = ${data}`)
            );
        } else {
            getYoutubeHotAsync().then((data) => {
                console.log(`hot video result = ${data}`);
                console.log(data);
            });
        }
    }, [search]);

    const onSearch = (detail) => {
        console.log(detail);
        setSearch(detail);
    };

    return (
        <div className='App'>
            <Header handleSearch={onSearch} />
            <div data-aos='slide-up' data-aos-offset='400'>
                {!loading ? (
                    <Videos key={videos.id} data={videos} />
                ) : (
                    "loading"
                )}
            </div>
        </div>
    );
}

export default App;
