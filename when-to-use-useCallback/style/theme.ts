import { createMuiTheme } from "@material-ui/core/styles"
import { red, green, amber } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber["900"],
    },
    secondary: {
      main: green["700"],
    },
    error: {
      main: red["A400"],
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: "'Roboto', sans-serif",
  },
})

export default theme
