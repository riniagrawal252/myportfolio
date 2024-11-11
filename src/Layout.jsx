import {Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
      <>
      
      <div className="link">
       
        <div className="hov"><Link to="home" >Home</Link></div>
      <div className="hov"><Link to="about">About</Link></div>
      <div className="hov"><Link to="project">Project</Link></div>
      <div className="hov"><Link to="resume">Resume</Link></div>
      <div className="hov"><Link to="blogs">Blogs</Link></div>
    
      </div>
      <Outlet/>
      
      <br/><br/>
      <br/>
      <br/>
      <br/><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <pre className="pree">DesignandDevelopedbyRiniAgrawal                                     Contact me on +91-9753862579                                                                  Follow me on <a href="https://www.linkedin.com/in/rini-agrawal-076619287/" ><img src="images\images1\th.jpg" className="pree1"/></a></pre>
     
      
      </>

    )
  }
  export default Layout;