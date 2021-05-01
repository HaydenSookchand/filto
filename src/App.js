import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import FilterControls from "./components/FilterControls";
import DownloadButtons from "./components/DownloadButtons";
import logo from "./images/logo.png";
import "./App.css";

const App = () => {
  const [canvas, setCanvas] = useState("");
  const [image, setImage] = useState("");
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    setCanvas(initCanvas());
    fabric.textureSize = 5168;
  }, []);

  useEffect(() => {
    addImageToCanvas();
  }, [image]);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 225,
      width: 300,

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
    imgInstance.scaleToHeight(225);
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

  const addFilterStrength = strength => {
    let image = canvas._objects[0]; // only one image on canvas

    image.filters[0]["blur"] = strength;
    image.applyFilters();
    canvas.renderAll();
  };

  const addFilter = userFilter => {
    let imageFilter = "";
    let image = canvas._objects[0];
    setIsBlur(false);
    if (image) {
      image.filters = [];

      switch (userFilter) {
        case "blur":
          setIsBlur(true);
          imageFilter = new fabric.Image.filters.Blur({
            blur: 0.5
          });
          break;
        case "sepia":
          imageFilter = new fabric.Image.filters.Sepia();
          break;
        case "vintage":
          imageFilter = new fabric.Image.filters.Vintage();
          break;
        case "kodachrome":
          imageFilter = new fabric.Image.filters.Kodachrome();
          break;
        case "technicolor":
          imageFilter = new fabric.Image.filters.Technicolor();
          break;
        default:
          image.filters = [];
          image.applyFilters();
          canvas.renderAll();
      }

      if (imageFilter) {
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
      <img alt="logo" id="logo" src={logo} className="logo" />
      <canvas id="canvas" />

      {/*  This is the native file input element. It is currently hidden and another button is implemented */}
      <input
        type="file"
        onChange={onImageChange}
        className="uploadButton"
        id="uploadButton"
        style={{ display: "none" }}
      />

      <img
        alt="uploadedimage"
        style={{ display: "none" }}
        id="target"
        src={image}
      />

      {image ? (
        <div>
          <FilterControls
            addFilter={addFilter}
            openFile={openFile}
            addFilterStrength={addFilterStrength}
            isBlur={isBlur}
          />
          <DownloadButtons downloadImage={downloadImage} />
        </div>
      ) : (
        <div onClick={openFile} className="btn startBtn">
          Choose Image
        </div>
      )}
    </div>
  );
};

export default App;
