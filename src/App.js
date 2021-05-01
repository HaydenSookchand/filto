import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import addButton from "./images/add.png";
import original from "./images/original.png";
import blur from "./images/blur.png";
import sepia from "./images/sepia.png";
import vintage from "./images/vintage.png";
import "./App.css";

const App = () => {
  const [canvas, setCanvas] = useState("");
  const [image, setImage] = useState("");
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    addImageToCanvas();
  }, [image]);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 300,
      width: 300,
      margin: 300,
      backgroundColor: "black"
    });

  const openFile = () => {
    var openButton = document.getElementById("uploadButton");
    openButton.click();
  };

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setTimeout(() => {
          addImageToCanvas();
          lockCanvas();
        }, 500);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  // locks items on canvas
  const lockCanvas = () => {
    if (canvas) {
      canvas.selection = false;
      canvas.forEachObject(function(o) {
        o.selectable = false;
      });
    }
  };

  // locks add images on canvas
  const addImageToCanvas = () => {
    let photo = document.getElementById("target");
    var imgInstance = new fabric.Image(photo);
    imgInstance.scaleToHeight(300);
    imgInstance.scaleToWidth(300);
    if (canvas) {
      canvas._objects = []; //remove other image from canvas
      canvas.add(imgInstance);
    }
  };

  function downloadImage(format) {
    if (canvas) {
      var image = canvas
        .toDataURL({
          format: format
        })
        .replace("image/" + format, "image/octet-stream");
      var link = document.createElement("a");
      link.download = "filto." + format;
      link.href = image;
      link.click();
    }
  }

  const addFilterStrength = e => {
    let image = canvas._objects[0]; // clean up magic number
    let strength = parseFloat(e.target.value);
    image.filters[0]["blur"] = strength;
    image.applyFilters();
    canvas.renderAll();
  };

  const addFilter = userFilter => {
    let imageFilter = "";
    let image = canvas._objects[0]; // clean up magic number

    // turn into a switch
    if (image) {
      image.filters = [];

      if (userFilter === "greyscale") {
        imageFilter = new fabric.Image.filters.Grayscale();
      }

      if (userFilter === "blur") {
        imageFilter = new fabric.Image.filters.Blur({
          blur: 0.5
        });
      }

      if (userFilter === "sepia") {
        imageFilter = new fabric.Image.filters.Sepia();
      }

      if (userFilter === "vintage") {
        imageFilter = new fabric.Image.filters.Vintage();
      }

      if (userFilter === "original") {
        image.filters = [];
        image.applyFilters();
        canvas.renderAll();
      }

      if (imageFilter) {
        setFilter(true);
        image.filters.push(imageFilter);
        image.applyFilters();
        canvas.renderAll();
      }
    } else {
      alert("Please add an Image");
    }
  };

  return (
    <div className="content">
      <div className="header"> Filto </div>

      <img onClick={openFile} src={addButton} className="addButton" />

      <canvas id="canvas" />

      <div className="file-button-container">
        <input
          type="file"
          onChange={onImageChange}
          className="uploadButton"
          id="uploadButton"
          style={{ display: "none" }}
        />
      </div>

      <img
        alt="uploadedimage"
        style={{ display: "none" }}
        id="target"
        src={image}
      />

      <div className="controls">
        <img
          onClick={() => addFilter("original")}
          src={original}
          className="filterButton"
        />

        <img
          onClick={() => addFilter("blur")}
          src={blur}
          className="filterButton"
        />

        <img
          onClick={() => addFilter("sepia")}
          src={sepia}
          className="filterButton"
        />

        <img
          onClick={() => addFilter("vintage")}
          src={vintage}
          className="filterButton"
        />
      </div>

      <select id="myList" onChange={addFilterStrength}>
        <option> Blur Filter Strength </option>
        <option> 0 </option>
        <option> 0.2 </option>
        <option> 0.5 </option>
        <option> 1 </option>
      </select>
      <button onClick={() => downloadImage("png")}>Download PNG</button>
      <button onClick={() => downloadImage("jpeg")}>Download JPG</button>
    </div>
  );
};

export default App;
