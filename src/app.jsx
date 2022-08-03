import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Videos from "./components/videos";

function App() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getYoutubeAsync = async () => {
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
        getYoutubeAsync().then((data) => {
            console.log(data);
        });
    }, []);

    const onSearch = (detail) => {
        console.log(detail);
    };

    return (
        <div className='App'>
            <Header handleSearch={onSearch} />
            {!loading ? <Videos key={videos.id} data={videos} /> : "loading"}
        </div>
    );
}

export default App;
