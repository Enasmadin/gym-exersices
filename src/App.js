import "./App.css";
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import ExperienceDetalies from "./page/ExperienceDetalies";
import { Box} from '@mui/system';
import Home from "./page/Home";
import Footer from "./components/Footer";
import ExerciseDetali from "./page/ExerciseDetali";
function App() {
  return (
    <Box  width="400px" sx={{width:{xl:"1488px"}}} m="auto">
      <Navbar/>
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route   path="/exercise/:id/" element={<ExerciseDetali/>}/>
       </Routes>
       <Footer/>
    </Box>
  );
}

export default App;
