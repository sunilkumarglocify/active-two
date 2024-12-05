import React from "react";
import { Stack, Typography } from "@mui/material";
import Layout from "../layout";
import InsightTable from "./insight-table";
import InsightDataCard from "./insight-data-card";
import palette from "../../theme/palette";

const CustomerInsight: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h5" mb={4}>
        Customer Insight
      </Typography>
      <Stack direction={"row"} flexWrap={"wrap"} gap={4} mb={6}>
        <InsightDataCard values={"20"} text={"New Customers(YTD)"} valuesColor={'#c17c3f'} />
        <InsightDataCard values={"70%"} text={"Repeat Customers"} valuesColor={palette.light.text.primary} />
        <InsightDataCard values={"390"} text={"Total"} valuesColor={palette.light.text.primary} />
      </Stack>
      <InsightTable />
    </Layout>
  );
};

export default CustomerInsight;
