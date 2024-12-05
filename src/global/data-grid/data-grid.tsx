import {
  DataGrid,
  DataGridProps,
  GridToolbarFilterButton,
  GridValidRowModel,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";

interface Props<Row extends GridValidRowModel> extends DataGridProps {
  advancedFiltering?: boolean;
}

export function StandardDataGrid<Row extends GridValidRowModel>({
  advancedFiltering,
  sx = {},
  ...props
}: Props<Row>) {
  return (
    <Box sx={{ ...sx }}>
      <DataGrid
        {...props}
        disableColumnMenu
        disableColumnResize
        hideFooter
        getRowId={(row) => row._id}
        slots={{
          toolbar: () => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <GridToolbarFilterButton />
            </div>
          ),
        }}
        slotProps={{}}
        sx={{
          ...sx,
          "& .MuiDataGrid-cell": {
            outline: "none !important",
          },
        }}
      />
    </Box>
  );
}
