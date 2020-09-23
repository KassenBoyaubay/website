import { createUseStyles } from "react-jss";

export default createUseStyles({
  app: {
    display: "flex",
    width: "100vw",
    height: "60vw",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#f1f5f8",
    flexDirection: "column",
  },
  colorSwatchContainer: {
    display: "flex",
  },
  colorSwatch: {
    margin: "1rem",
    padding: 0,
    width: "25px",
    height: "25px",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
  resetButton: {
    margin: "1rem",
    padding: "0.5rem",
    cursor: "pointer",
    outline: "none",
    borderRadius: "15%",
  },
});
