import { Box, InputAdornment, InputBase, Paper, Typography } from "@mui/material";

import Layout from "../../Layouts";
import { SetStateAction, useContext, useState } from "react";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieTrendList from "../../components/movie-trendlist";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Home = () => {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const trendingList = movies.filter(item => item.isTrending === true);
  const recommendedList = movies.filter(item => item.isTrending !== true);


  const handleSearch = (e: {target: {value: SetStateAction<string>}}) => {
    setSearch(e.target.value)
    const newList = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    setSearchList(newList)
  }

  const formStyle = {
    display: "flex",
    alignItems: "center",
    borderRadius: "default",
    p: 1,
    backgroundColor: "#10141f",
    border: "none",
  };

  return (
    <Layout>
      <Box>
        <Paper component={"form"} sx={formStyle}>
          <InputBase autoComplete="true"
            placeholder={"Search for movies or tv series"}
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none"
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ?
         <Box width={"100%"}>
          <Box width={"100%"}>
            <Typography my={6} component="h1" variant="h5" fontWeight={400}>
              Trending
            </Typography>
            <MovieTrendList trendingList = {trendingList} />
          </Box>
          <Box width={"100%"}>
            <Typography my={6} component="h1" variant="h5" fontWeight={400}>
              Recommended For You
            </Typography>
            <MovieList recommendedList = {recommendedList} />
          </Box>
         </Box>
         :
         <Box width={"100%"}>
          <Typography>
            Found "{searchList.length}" for "{search}"
          </Typography>
          <MovieList recommendedList={searchList} />
         </Box> }
      </Box>
    </Layout>
  );
};

export default Home;
