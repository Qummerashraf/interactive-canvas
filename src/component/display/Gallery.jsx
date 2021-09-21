import { Box, Container } from "@material-ui/core";
import { useContext } from "react";
import { Context } from "../../App";
import Searchresult from "./Searchresult";
import Api from "./Api";

function Gallery() {
  const { getsearch } = useContext(Context);

  return (
    <Box>
      <Container>
        <div className="grid">
          {getsearch.length ? <Searchresult /> : <Api />}
        </div>
      </Container>
    </Box>
  );
}

export default Gallery;
