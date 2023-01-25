import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home, Create } from "./pages/exportPages";
import { Header, Main } from "./components/exportComponents";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main />
        </BrowserRouter>
    );
};
export default App;
