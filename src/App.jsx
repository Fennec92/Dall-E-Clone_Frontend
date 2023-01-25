import { BrowserRouter } from "react-router-dom";
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
