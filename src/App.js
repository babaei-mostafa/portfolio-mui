import { Button } from "@mui/material";
import "./App.css";
import Header from "./components/ui/Header";
import SwiperSlider from "./components/ui/SwiperSlider";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <SwiperSlider /> */}
      <VideoPlayer />
    </div>
  );
}

export default App;
