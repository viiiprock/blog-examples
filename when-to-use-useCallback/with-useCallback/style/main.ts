import { fade, makeStyles } from "@material-ui/core/styles"
import theme from 'style/theme'

export const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
  },
  title: {
    whiteSpace: "nowrap",
    color: "#fff8e1"
  },
  topbar: {
    margin:0,
    padding:0
  },
  taskList: {
    border: 0,
    padding: "5px",
    margin: 0,
  },
  form: {
    width: "100%",
    margin: "1.2rem",
  },
  input: {
    color: "#fff",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    paddingLeft: `calc(0.2em + ${theme.spacing(4)}px)`,
  },
})
