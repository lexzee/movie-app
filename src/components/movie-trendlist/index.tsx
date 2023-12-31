import { Box, Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import MovieTrendCard from "../cards/MovieTrendCard";

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList = ({trendingList} : MovieTrendListProps) => {
  console.log("Trend List: ", trendingList);

  return (
    <Box sx={{display: "flex", gap: 2, overflowX: "scroll"}}>
      {trendingList.map((movie: any) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{backgroundColor: "transparent"}}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  )
}

export default MovieTrendList