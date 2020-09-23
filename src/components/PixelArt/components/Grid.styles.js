import { createUseStyles } from "react-jss";

export default createUseStyles({
  grid: {
    display: "grid",
    width: "40vw",
    height: "40vw",
    border: "2px solid black",
    gridTemplateRows: "repeat(16 ,1fr)",
    gridTemplateColumns: "repeat(16 ,1fr)",
    backgroundColor: "white",
    marginBottom: "2rem",
  },
  cell: {
    border: "2px solid rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    backgroundColor: "white",
    "&:hover": {
      transform: "scale(1.2)",
      border: "2px solid rgba(0, 0, 0, 1)",
    },
  },
});
