import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";
import Blogs from "./Blogs";


const App=()=>{
  return(
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="project" element={<Project/>} />
          <Route path="resume" element={<Resume/>}/>
          <Route path="blogs" element={<Blogs/>} />
      </Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;