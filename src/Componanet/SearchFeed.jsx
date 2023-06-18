import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Vedios from "./Vedios";
import { fetchFromApi } from "../Utils/FetchFromApi";
import { useParams } from "react-router-dom";

export const SearchFeed = () => {
  const [vedios, setVedios] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVedios(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for <span style={{ color: "red" }}>{searchTerm}</span>{" "}
        videos
      </Typography>
      <Vedios vedios={vedios} />
    </Box>
  );
};
export default SearchFeed;
