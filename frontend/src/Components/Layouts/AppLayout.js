import React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => (
    <div>
      <Header />

      <Grid container height={"calc(100vh - 4rem)"}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}
        >
          dsgf
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
          <WrappedComponent {...props} />
        </Grid>

        <Grid
          item
          md={4}
          lg={3}
          height={"100%"}
          sx={{
            display: { xs: "none", md: "block" },
            padding: "2rem",
            bgcolor: "rgba(0,0,0,0.85)",
          }}
        >
          {/* <Profile user={user} /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default AppLayout;

// function AppLayout() {
//   return function WrappedComponent() {
//     return function (props) {
//       return (
//         <div>
//           <div>Header</div>
//           <WrappedComponent {...props} />
//           <div>Footer</div>
//         </div>
//       );
//     };
//   };
// }
