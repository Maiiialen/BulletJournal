import { Box } from "@mui/material"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

function Weather() {

  return (
    <Box sx={{ display: "flex" }}>
      <WbSunnyIcon />
      <ThunderstormIcon />
      <AcUnitIcon />
      <WbCloudyIcon />
      <WaterDropIcon />
    </Box>
  )
}

export default Weather