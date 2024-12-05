import { Stack, Typography, useTheme, } from "@mui/material";
import palette from "../../theme/palette";


interface InsightCard {
  values: string;
  text: string;
  valuesColor: string;
}

const InsightDataCard = ({ values, text, valuesColor }: InsightCard) => {
  const theme = useTheme();
  return (
    <Stack
      justifyContent={"center"}
      gap={1}
      sx={{
        width: "170px",
        height: "126px",
        backgroundColor: "#b8dbe1",
        borderRadius: 1.2,
      }}
    >
      <Typography variant="h5"
        sx={{
          textAlign: 'center',
          color: valuesColor
        }}
      >
        {values}
      </Typography>
      <Typography variant="body1"
        sx={{
          color: theme.palette.mode === "light" ? palette.light.text.primary : palette.light.background.default,
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default InsightDataCard;
