import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
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
      height: 600,
      width: 600,
      backgroundColor: "black"
    });

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        setImage(URL.createObjectURL(event.target.files[0]));

        // add a loader? make buttons blured out while this is happening
        setTimeout(() => {
          addImageToCanvas();
        }, 2000);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const addImageToCanvas = () => {
    let photo = document.getElementById("target");
    var imgInstance = new fabric.Image(photo);

    if (canvas) {
      canvas.add(imgInstance);
    }
  };

  const addFilter = userFilter => {
    let imageFilter = "";
    let image = canvas._objects[1]; // clean up magic number

    //remove old filters
    image.filters = [];

    // turn into a switch
    if (image) {
      if (userFilter == "greyscale") {
        imageFilter = new fabric.Image.filters.Grayscale();
      }

      if (userFilter == "blur") {
        imageFilter = new fabric.Image.filters.Blur({
          blur: 0.5
        });
      }

      if (userFilter == "sepia") {
        imageFilter = new fabric.Image.filters.Sepia();
      }

      if (userFilter == "vintage") {
        imageFilter = new fabric.Image.filters.Vintage();
      }

      if (userFilter == "original") {
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
      alert("please add an image to add filter to");
    }
  };

  return (
    <div>
      <canvas id="canvas" />

      <input
        type="file"
        onChange={onImageChange}
        className="filetype"
        id="group_image"
      />

      <img style={{ display: "none" }} id="target" src={image} />

      <button onClick={() => addFilter("original")}> Normal </button>
      <button onClick={() => addFilter("blur")}> Blur </button>
      <button onClick={() => addFilter("greyscale")}> GreyScale </button>
      <button onClick={() => addFilter("sepia")}> Sepia </button>
      <button onClick={() => addFilter("vintage")}> Vintage </button>
    </div>
  );
};

export default App;
