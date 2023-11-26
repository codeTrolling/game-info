'use client'
//import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import theme from "../assets/darkThemeIcon.png";
import home from "../assets/HomeIcon.png";


const Navigation = () => {
    //THIS IS USED FOR SMOOTHER TRANSITIONS BETWEEN PAGES!! MIGHT BE USED IN THE FUTURE BUT I THINK IT DOESN"T LOOK TOO GOOD AND SLOWS DOWN THE APP
    // const { push } = useRouter();
    // const pathname = usePathname();
    // const [pageTransition, setPageTransition] = useState(["0", "0px"]);

    // const goToHome = () => {
    //     if(pathname !== "/"){
    //         setPageTransition(["1", "100vh"])
    //         setTimeout(() => {
    //             push("/")
    //             setPageTransition(["1", "0px"])
    //         }, 500)
    //     }
    // }

    const changeTheme = () =>{
        let styles = document.documentElement.style;
        if(styles.getPropertyValue("--text-color") === "black"){
            styles.setProperty("--text-color", "white");
            styles.setProperty("--background-color", "rgb(20 20 20)");
            styles.setProperty("--box-shadow", "white");
            styles.setProperty("--hover-background-color", "rgb(70 70 70)");
            styles.setProperty("--icons-color", "0");
        }
        else{
            styles.setProperty("--text-color", "black");
            styles.setProperty("--background-color", "whitesmoke");
            styles.setProperty("--box-shadow", "black");
            styles.setProperty("--hover-background-color", "rgb(200 200 200)");
            styles.setProperty("--icons-color", "1");
        }
    }

    return(
        <>
        {/* <div className="nav-page-transition"></div>  <- Part of the "smooth" transition*/}
        <Link href={"/"} className="home-image"><img src={home.src} alt="" className="navigation-images"/></Link>
        <div className="home-image" onClick={changeTheme}><img src={theme.src} alt="" className="navigation-images"/></div>
        </>
    )
}

export default Navigation;