import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";
import banner from "../images/banner.jpg";
import c from "../images/c.png";
import cpp from "../images/cpp.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
const Firstpage = () => {
  return (
    <div>
      {/* <Grid container> */}
      <div
        style={{
          padding: "30px",
          width: "100%",
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
          paddingBottom: "20%",
          backgroundColor: "red",
        }}
      >
        <h2 style={{ fontSize: "4vw", color: "white" }}>
          Code and run <br />
          in you browser
        </h2>
        <p style={{ fontSize: "2vw", color: "white" }}>
          Create, Edit and Save Web, C/CPP Apps
        </p>
      </div>
      <div
        style={{
          padding: "30px",
          paddingBottom: "20%",
          backgroundColor: "rgb(236, 239, 241)",
        }}
      >
        <p style={{ color: "rgb(98, 98, 98)", fontSize: "3vw" }}>
          Start New Project For Free
        </p>
        <Link to="/web" style={{ textDecoration: "none", color: "white" }}>
          <Button
            align="right"
            variant="contained"
            color="secondary"
            size="large"
            style={{ margin: "30px", height: "70px", width: "200px" }}
          >
            web
          </Button>
        </Link>
        <Link to="/c_cpp" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ margin: "30px", height: "70px", width: "200px" }}
          >
            c_cpp
          </Button>
        </Link>
        <br />
        <p style={{ color: "rgb(98, 98, 98)", fontSize: "3vw" }}>
          What You Can Code
        </p>
        <img src={c} style={{ width: "15%", height: "15%", margin: "50px" }} />
        <br />
        <img
          src={cpp}
          style={{ width: "15%", height: "15%", margin: "50px" }}
        />
        <img
          src={html}
          style={{ width: "15%", height: "15%", margin: "50px" }}
        />
        <br />
        <img src={js} style={{ width: "15%", height: "15%", margin: "50px" }} />
        <img
          src={css}
          style={{ width: "15%", height: "15%", margin: "50px" }}
        />
      </div>
    </div>
  );
};
export default Firstpage;
