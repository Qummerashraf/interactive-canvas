import { Box, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Imgcanvas from "../component/canvas/Imgcanvas";

function Canvas() {
  return (
    <>
      <Box id="head-box">
        <Container>
          <Link to="/">
            <div id="Home">
              <button>HOME</button>
              <h2>Canvas</h2>
              <div className="clear"></div>
            </div>
          </Link>
        </Container>
      </Box>

      <Imgcanvas />
    </>
  );
}

export default Canvas;
