import React from "react";
import Vedios from "./Vedios";
import ChannelCard from "./ChannelCard";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../Utils/FetchFromApi";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  console.log(videos);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]); // مهممم

      const videosData = await fetchFromApi(
        `search?channelId=${id}&part=snippet`
      );

      setVideos(videosData.items);
      console.log(id);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Vedios vedios={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
