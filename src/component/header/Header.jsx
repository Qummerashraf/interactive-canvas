import { Box, Container, Grid } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <Box id="heads">
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="head">
              <h1>Canvas</h1>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
