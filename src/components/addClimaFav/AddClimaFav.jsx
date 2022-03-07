import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Agregar Ciudad" {...a11yProps(0)} />
          <Tab label="Agregar Foto" {...a11yProps(1)} />
          <Tab label="Ver clima" {...a11yProps(2)} />
          <Tab label="Agregar Ciudad" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            width: 500,
            maxWidth: "200%"
          }}
        >
          <TextField fullWidth label="Nombre de la ciudad" id="fullWidth" />
          <TextField fullWidth label="Nombre País" id="fullWidth" />
          <Button variant="contained" disableElevation>
            Disable elevation
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Aqui puedes gregar tu foto
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
