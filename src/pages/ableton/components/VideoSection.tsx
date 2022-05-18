import styled from "styled-components";
import React from "react";

interface Props {}

const VideoSection: React.FC<Props> = () => {
  return (
    <Wrapper>
      <YoutubePlayer
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9SbnhgjeyXA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  margin: 150px auto;
  aspect-ratio: 16/9;
`;

const YoutubePlayer = styled.iframe`
  width: 100%;
  height: 100%;
`;
export default VideoSection;
