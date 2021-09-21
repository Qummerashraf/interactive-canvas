import { Box, Container } from "@material-ui/core";
import "../../index.css";
function Search({ getName, submitName }) {
  return (
    <Box>
      <Container>
        <div style={{ textAlign: "center" }}>
          <form onClick={submitName}>
            <input type="text" onChange={getName} />
            <button type="submit">Search</button>
          </form>
        </div>
      </Container>
    </Box>
  );
}

export default Search;
