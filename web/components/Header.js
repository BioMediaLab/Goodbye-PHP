import Nav from "./Nav";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () =>{
  NProgress.start();
}
Router.onRouteChangeComplete = () =>{
  NProgress.done();
}
Router.onRouteChangeError = () =>{
  NProgress.done();
}


const Header = () => (
  <div>
    <div className="bar">
    <h1>
      <Link href="/">
       <a>BioMediaLab</a> 
      </Link>
    </h1>
      <Nav />
    </div>
  </div>
);

export default Header;
