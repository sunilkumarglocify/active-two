import React from "react";
import { Typography } from "@mui/material";
import Layout from "../layout";

const BusinessProfile: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h1">Business Profile</Typography>
      <Typography variant="body1">
        This is the content of the Business Profile page.
      </Typography>
    </Layout>
  );
};

export default BusinessProfile;
