import { Box, Container, Grid } from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import { fabric } from "fabric";
import "./imgcanvas.css";
import { Context } from "../../App";
import canvasToImage from "canvas-to-image";

function Imgcanvas() {
  const { canvasImg } = useContext(Context);
  const [canvas, setCanvas] = useState("");
  const [element, setElement] = useState([]);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      backgroundColor: "white",
    });

  /*   let imgCanvas = canvasImg;
   */
  const createPoly = (canvas) => {
    var polygon = new fabric.Polygon(
      [
        { x: 200, y: 10 },
        { x: 250, y: 50 },
        { x: 250, y: 180 },
        { x: 150, y: 180 },
        { x: 150, y: 50 },
      ],

      {
        fill: "blue",
        right: 0,
        top: 0,
      }
    );

    // Render the polygon in canvas
    canvas.add(polygon);
    setElement((element) => [...element, "Polygon"]);
  };

  const createCircle = (canvas) => {
    var circle = new fabric.Circle({
      radius: 30,
      fill: "",
      stroke: "green",
      strokeWidth: 3,
    });

    // Render the circle in canvas
    canvas.add(circle);
    setElement((element) => [...element, "Circle"]);
  };

  const createRect = (canvas) => {
    // create a rectangle object
    const rect = new fabric.Rect({
      left: 100,
      top: 200,
      fill: "red",
      width: 150,
      height: 100,
    });

    // "add" rectangle onto canvas
    canvas.add(rect);
    canvas.renderAll();
    setElement((element) => [...element, "Rectangle"]);
  };

  const createTriangle = (canvas) => {
    var triangle = new fabric.Triangle({
      width: 150,
      height: 100,
    });

    // Render the Triangle in canvas
    canvas.add(triangle);
    canvas.centerObject(triangle);
    canvas.renderAll();
    setElement((element) => [...element, "Circle"]);
  };

  const addText = (canvas) => {
    // Create a new Textbox instance
    var text = new fabric.Textbox("ADD TEXT", {
      width: 150,
      right: 50,
      top: 100,
    });

    canvas.add(text);
    setElement((element) => [...element, "Text"]);
  };

  //addimage

  const addImage = (canvas) => {
    fabric.Image.fromURL(`${canvasImg}`, function (myImg) {
      myImg.set({
        left: 300,
        top: 0,
      });
      myImg.scaleToHeight(300);
      myImg.scaleToWidth(300);
      canvas.add(myImg);
    });
    setElement((element) => [...element, "Image"]);
  };

  console.log(element);

  const downloadImg = function () {
    canvasToImage("canvas", {
      name: "myImage",
      type: "png",
      quality: 1,
    });
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlog(), "canvas-image.png");
    } else {
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.href = canvas.toDataURL("image/jpeg");
      a.download = "canvas-image.jpeg";
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
              <div className="buttons">
                <button onClick={() => createCircle(canvas)} id="circle">
                  Circle
                </button>
                <button onClick={() => createPoly(canvas)} id="poly">
                  Polygon
                </button>
                <button onClick={() => createRect(canvas)} id="rect">
                  Rectangle
                </button>
                <button onClick={() => createTriangle(canvas)} id="tri">
                  Triangle
                </button>
                <button onClick={() => addText(canvas)} id="add">
                  Add Text
                </button>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} id="can-adj">
              {" "}
              <canvas
                id="canvas"
                width="600px"
                height="400px"
                style={{ border: "2px solid red" }}
              >
                HTML5 canvas tag is not supported by your browser.
              </canvas>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
              <div id="canvasImg">
                <img
                  src={canvasImg}
                  alt=""
                  srcSet={canvasImg}
                  width="200px"
                  height="100px"
                />
                <button onClick={() => addImage(canvas)} id="addImg">
                  Add Image
                </button>
              </div>
              {/*               <button onClick={(canvas) => clearCanvas()}></button>
               */}{" "}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} id="down-center">
              <input
                id="c"
                type="button"
                value="Download"
                onClick={downloadImg}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Imgcanvas;
