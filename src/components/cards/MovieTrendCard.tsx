import { useContext } from "react"
import { MovieDataType } from "../../assets/data"
import { MovieContext } from "../../context/movie-context"
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material"
import moviesIcon from "../../assets/icons/icon-category-movie.svg"
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg"
import BookmarkIcon from "../icons/bookmark-icon"
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon"

interface MovieCardProps {
  movie: MovieDataType
}

const MovieTrendCard = ({movie} : MovieCardProps) => {
  const { dispatch } = useContext(MovieContext)
  const handleBookmarkToggle = (id: string) => {
    dispatch({type: "TOGGLE BOOKMARK", id})
  }

  return (
    <Card key={movie.id} elevation={0} style={{backgroundColor: "transparent"}}>
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex"
        }}>
          <img
            src={movie.thumbnail.regular.large}
            alt=""
            style={{width: "300px", height: "150px", borderRadius: "8px"}}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgcolor={"rgba(0,0,0,0.6)"}
            borderRadius={"8px"}
          />
          <Stack
            position={"absolute"}
            mt={6}
            p={4}
            spacing={0}
            left={0}
            right={0}
            top={0}
            bottom={0}
          >
            <Grid container alignItems="center" spacing={1}>
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
                    width: "1rem",
                    height: "1rem",
                    bg: "#e0e0e0",
                    borderRadius: "full"
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
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgcolor={"rgba(0,0,0,0.6)"}
                borderRadius={"8px"}
              />
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
          </Stack>
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

export default MovieTrendCard