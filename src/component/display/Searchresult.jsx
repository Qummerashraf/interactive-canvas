import React, { useContext } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";

function Searchresult() {
  const { getsearch, imgSrc } = useContext(Context);
  return (
    <>
      {getsearch.length
        ? getsearch.map((images, i) => (
            <React.Fragment key={i}>
              <img
                className="img-item"
                src={images.urls.full}
                alt=""
                srcSet={images.urls.full}
              />
              <Link to="/canvas">
                {" "}
                <div className="img-btn">
                  <button onClick={() => imgSrc(images.id, images.urls.full)}>
                    Add Captions
                  </button>
                </div>
              </Link>
            </React.Fragment>
          ))
        : null}
    </>
  );
}

export default Searchresult;
