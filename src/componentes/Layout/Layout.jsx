import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

export default function Layout({children}) {
    return(
        <div className="layoutContenedor">
            <div className="layoutHeader">
                <Brand/>
                <NavBar/>
            </div>
            <main className="Main">{children}</main>
            <Footer/>
        </div>
    )
}