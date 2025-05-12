import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
                
        </footer>
        </>
    )
}
