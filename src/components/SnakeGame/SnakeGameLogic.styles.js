import { createUseStyles } from "react-jss";

export default createUseStyles({
  gameArea: {
    position: "relative",
    margin: "50px auto",
    width: "600px",
    height: "600px",
    border: "2px solid #000",
    backgroundColor: "#fff",
    display: "grid",
    gridTemplateColumns: "repeat(16, 1fr)",
    gridTemplateRows: "repeat(16, 1fr)",
  },
  box: {
    border: "2px solid rgba(0,0,0,0.2)"
  }
});