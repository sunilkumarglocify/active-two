import React from "react";
import { Typography } from "@mui/material";
import Layout from "../layout";

const Campaign: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h1">Campaign</Typography>
      <Typography variant="body1">
        This is the content of the Campaign page.
      </Typography>
    </Layout>
  );
};

export default Campaign;
