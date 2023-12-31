import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import { MovieDataType } from "../../assets/data"
import { MovieContext } from "../../context/movie-context"
import { useContext } from "react"
import moviesIcon from "../../assets/icons/icon-category-movie.svg"
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg"
import BookmarkIcon from "../icons/bookmark-icon"
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon"

interface MovieCardProps {
  movie: MovieDataType
}

const MovieCard = ({movie} : MovieCardProps) => {
  const { dispatch } = useContext(MovieContext)
  const handleBookmarkToggle = (id: string) => {
    dispatch({type: "TOGGLE BOOKMARK", id})
  }

  return (
    <Card variant="outlined" sx={{
      backgroundColor: "transparent",
      my: 3,
      color: "#e0e0e0",
      border: "none"
    }}>
      <CardContent sx={{p: 0, position: "relative"}}>
        <Grid container spacing={1}>
          <Grid item>
            <img src={movie.thumbnail.regular.large} alt="" style={{height: "180px", width: "400px", borderRadius: "8px"}} />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography
                  fontSize={10}
                  color={"#e0e0e0"}
                  aria-label="year of movie"
                >{movie.year}</Typography>
              </Grid>
              <Grid item>
                <Box
                  sx = {{
                    width: "4px",
                    height: "4px",
                    background: "#bdbdbd",
                    borderRadius: "50%"
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={movie.category === "Movie" ? moviesIcon : tvSeriesIcon}
                  alt=""
                  style={{width: "16px", height: "16px", borderRadius: "0px"}}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color={"#e0e0e0"}
                  aria-label="movie category"
                >{movie.category}</Typography>
              </Grid>
              <Grid item>
                <Box
                  sx = {{
                    width: "4px",
                    height: "4px",
                    background: "#bdbdbd",
                    borderRadius: "50%"
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color={"#e0e0e0"}
                  aria-label="movie rating"
                >{movie.rating}</Typography>
              </Grid>
            </Grid>
            <Typography
              color={"#e0e0e0"}
              padding={0}
              aria-label="movie title"
            >{movie.title}</Typography>
          </Grid>
        </Grid>
        <Box
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px"
            }}
          >
            <Box
              sx={{
                p: "1rem",
                backgroundColor: "black",
                borderRadius: "100%",
                cursor: "pointer",
                "&:hover": {opacity: 0.8},
              }}
              onClick = {() => handleBookmarkToggle(movie.id)}
            >
              {movie.isBookmarked ? <BookmarkIcon fill={"#e0e0e0"} /> : <BookmarkEmptyIcon />}
            </Box>
          </Box>
      </CardContent>
    </Card>
  )
}

export default MovieCard