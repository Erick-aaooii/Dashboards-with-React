import ReactDOM from "react-dom/client";
import AppRouter from "./routes";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(<AppRouter/>);