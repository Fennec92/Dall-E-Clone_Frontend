import { Link } from "react-router-dom";
import { logo } from ".././assets/exportAssets";

const Header = () => {
    return (
        <header className="flex w-full items-center justify-between border-b-2 border-b-[#e6ebf4] bg-white px-4 py-4 sm:px-8">
            <Link to="/">
                <img src={logo} alt="logo" className="w-8 object-contain" />
            </Link>
            <Link
                to="/create"
                className="rounded-md bg-[#6469ff] px-4 py-2 font-inter font-medium text-white"
            >
                Neu erstellen
            </Link>
        </header>
    );
};
export default Header;
