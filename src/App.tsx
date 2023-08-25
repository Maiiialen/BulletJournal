import { Box } from '@mui/material'
import Page from './components/page/Page'

function App() {
  return (
    <Box sx={{
      height: "100vh", width: "100vw", display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Page />
    </Box>
  )
}

export default App
