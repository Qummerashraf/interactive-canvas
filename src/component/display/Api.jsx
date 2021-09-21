import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";

function Api() {
  const { image, imgSrc } = useContext(Context);

  return (
    <>
      {image.map((images, i) => (
        <>
          <React.Fragment key={i}>
            <img
              className="img-item"
              src={images.urls.full}
              alt=""
              srcSet={images.urls.full}
            />
          </React.Fragment>
          <Link to="/canvas">
            {" "}
            <div className="img-btn">
              <button onClick={() => imgSrc(images.id, images.urls.full)}>
                Add Captions
              </button>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}

export default Api;
