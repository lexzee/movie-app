import { useLocation, Link } from "react-router-dom"
import { Box, Hidden, Typography } from "@mui/material"
import HomeIcon from "../icons/home-icon.svg"
import MovieIcon from "../icons/movie-icon.svg"
import TvSeriesIcon from "../icons/series-icon.svg"
import BookmarkIcon from "../icons/bookmark-icon.svg"

const navLinks = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/"
  },
  {
    name: "Movie",
    icon: MovieIcon,
    link: "/movies"
  },
  {
    name: "Tv Series",
    icon: TvSeriesIcon,
    link: "/tv-series"
  },
  {
    name: "Bookmark",
    icon: BookmarkIcon,
    link: "/bookmark"
  }
]

const sidebarStyle = {
  backgroundColor: "#161d2f",
  padding: 2,
  borderRadius: 2,
  display: "flex",
  flexDirection: {
    xs: "row",
    lg: "column"
  },
  alignItems: "center",
  justifyContent: "space-between",
  width: {
    sm: "100%",
    lg: 200,
  }
}

// const navMenu = navLinks.map(item => (
//   <Link
//     key={item.name}
//     to= {item.link}
//     style={{ textDecoration: "none", color: "white"}}
//   >
//     <Box>
//       <img
//         src={item.icon}
//         alt={item.name}
//         style={{
//           width: "18px",
//           filter: `${pathname === item.link ?
//             contrast(87%):
//           }`
//         }}
//       />
//       <Hidden mdDown>
//         <Typography>
//           {item.name}
//         </Typography>
//       </Hidden>
//     </Box>
//   </Link>
// ))
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box sx={sidebarStyle}>
      <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        gap: 4,
        alignItems: {
          xs: "center",
          lg: "start"
        },
        width: "100%",
      }}>
        <Hidden smDown>
          <Typography
            variant = "h5"
            component = "h1"
            my={2}
            fontSize={18}
            fontWeight={400}
          >Grim Shows</Typography>
        </Hidden>

        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column"
            },
            gap: 4
          }}
        >
          {/* {navMenu} */}
          {navLinks.map(item => (
            <Link
              key={item.name}
              to= {item.link}
              style={{ textDecoration: "none", color: "white"}}
            >
              <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "white",
                textDecoration: "none",
              }}>
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "18px",
                    filter: `${pathname === item.link
                      ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                      : "invert(84deg)"}`
                  }}
                />
                <Hidden mdDown>
                  <Typography>
                    {item.name}
                  </Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar