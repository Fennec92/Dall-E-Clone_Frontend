import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home, Create } from "./pages/exportPages";
import { Header } from "./components/exportComponents";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
};
export default App;
