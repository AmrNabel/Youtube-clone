import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Componanet/Navbar";
import VideoDetiles from "./Componanet/VideoDetiles";
import SearchFeed from "./Componanet/SearchFeed";
import ChannelDetiles from "./Componanet/ChannelDetiles";
import { Feed } from "./Componanet/Feed";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetiles />} />
        <Route path="/channel/:id" element={<ChannelDetiles />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
