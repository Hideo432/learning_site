import { useEffect, useRef, useState } from "react";
import "./videoPlayer.css";
export default function VideoPlayer() {
  const [isPLaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState<number>(0);
  const vidref = useRef<HTMLVideoElement | null>(null);
  const vidPlayButton = useRef<HTMLElement>(null);

  const vidBack = () => {
    if (vidref.current) {
      vidref.current.currentTime = Math.max(0, vidref.current.currentTime - 5); // Перемотка на 5 секунд назад
    }
  };

  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    const videoElement = vidref.current;

    if (!videoElement) return;

    const updateTime = () => {
      setCurrentTime(videoElement.currentTime);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Форматирование с ведущим нулем для секунд
  };

  const [videoDuration, setVideoDuration] = useState(String);
  const handleLoadedMetadata = () => {
    const video = vidref.current;
    if (!video) return;

    setDuration(video.duration);
  };

  useEffect(() => {
    setVideoDuration(
      duration / duration +
        `: ${
          10 > Number((duration % 60).toFixed(0))
            ? "0" + Number((duration % 60).toFixed(0))
            : Number((duration % 60).toFixed(0))
        }`
    );
  }, [duration]);
  const vidForward = () => {
    if (vidref.current) {
      vidref.current.currentTime = Math.max(0, vidref.current.currentTime + 5); // Перемотка на 5 секунд назад
    }
  };
  const vidPlay = () => {
    isPLaying === false
      ? vidref.current && vidref.current.play()
      : vidref.current && vidref.current.pause();
    setIsPlaying(!isPLaying);
  };
  const volumeMuted = () => {
    setIsMuted(!isMuted);
  };
  const fullScreen = () => {
    if (!isFullscreen) {
      vidref.current && vidref.current.requestFullscreen();
      console.log();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen((prev) => !prev);
  };

  const handleProgressBar = () => {
    if (vidref.current && vidref.current.duration) {
      const currentProgress =
        (vidref.current.currentTime / vidref.current.duration) * 100;
      setProgress(currentProgress);
    }
  };
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.nativeEvent.offsetX;

    if (progressBar.offsetWidth === 0) return;

    const newProgress = (clickPosition / progressBar.offsetWidth) * 100;

    if (vidref.current) {
      const newTime = (newProgress / 100) * vidref.current.duration;

      vidref.current.currentTime = newTime;
    }
  };
  useEffect(() => {
    const videoElement = vidref.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleProgressBar);
      return () => {
        videoElement.removeEventListener("timeupdate", handleProgressBar);
      };
    }
  }, []);
  return (
    <div style={{ position: "relative" }} className="homepage__videoPlayer">
      <div className="homepage__videoBar">
        <div
          style={{
            paddingLeft: 20,
            paddingBottom: 10,
            display: "flex",
            gap: 20,
          }}
        >
          {isPLaying === true ? (
            <img
              onClick={() => {
                vidPlay();
              }}
              className="videoBar-play-button"
              src="/src/assets/icons/videoBar-pause-button.svg"
              alt=""
            />
          ) : (
            <img
              onClick={() => {
                vidPlay();
              }}
              className="videoBar-play-button"
              src="/src/assets/icons/videoBar-play-button.svg"
              alt=""
            />
          )}
          <p className="video-duration">
            {duration == 0
              ? "00:00 / 00:00"
              : ` ${formatTime(currentTime + 0.5)}/${videoDuration}`}
          </p>{" "}
          <div
            onClick={(e) => {
              handleProgressClick(e);
            }}
            className="progress-bar__container"
          >
            <div
              style={{ width: `${progress}%` }}
              className="progress-bar"
            ></div>
          </div>
        </div>

        <div
          style={{
            paddingRight: 20,
            paddingBottom: 10,
            display: "flex",
            gap: 20,
          }}
        >
          {isMuted === false ? (
            <img
              onClick={() => {
                volumeMuted();
              }}
              src="/src/assets/icons/sound.svg"
              className="video-soung-button"
            ></img>
          ) : (
            <img
              onClick={() => {
                volumeMuted();
              }}
              src="/src/assets/icons/muted.svg"
              className="video-soung-button"
            ></img>
          )}
          <img
            onClick={() => {
              fullScreen();
            }}
            className="video-fullScreen-button"
            src="/src/assets/icons/fullScreen.png"
          />
        </div>
      </div>
      <div
        onClick={() => {
          vidBack();
        }}
        className="homepage__video-back"
      ></div>
      <div
        onClick={() => {
          vidForward();
        }}
        className="homepage__video-forward"
      ></div>
      <span className="homepage__video-rectTop"></span>
      <span className="homepage__video-rectBottom"></span>
      <span
        ref={vidPlayButton}
        onClick={() => {
          vidPlay();
        }}
        className="homepage__video-play"
        style={{
          backgroundImage: `${
            isPLaying === false
              ? "url(/src/assets/icons/play.png)"
              : "url(/src/assets/icons/pause.png)"
          }`,
          backgroundPosition: `${
            isPLaying === false ? "27px center" : "center"
          }`,
        }}
      ></span>
      <video
        ref={vidref}
        className="homepage__video"
        poster="/src/assets/images/teacher_explain.png"
        src="/src/assets/video/video.mp4"
        muted={isMuted}
        onLoadedMetadata={handleLoadedMetadata}
      ></video>
    </div>
  );
}
