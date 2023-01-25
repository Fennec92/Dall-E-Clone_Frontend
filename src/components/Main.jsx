import { Route, Routes } from "react-router-dom";
import { Home, Create } from "../pages/exportPages";

const Main = () => {
    return (
        <main className="min-h-[calc(100vh-74px)] w-full bg-[#f9fafe] px-4 py-8 sm:p-8">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </main>
    );
};
export default Main;
