import { Link } from "react-router-dom";
import { logo } from ".././assets/exportAssets";

const Header = () => {
    return (
        <header className="flex w-full items-center justify-between border-b-2 border-b-[#3664e43d] bg-white px-4 py-4 sm:px-8">
            <Link to="/">
                <img src={logo} alt="logo" className="w-8 object-contain" />
            </Link>
            <Link
                to="/create"
                className="rounded-xl bg-[#df2554] px-4 py-2 font-inter font-medium text-white"
            >
                Neu erstellen
            </Link>
        </header>
    );
};
export default Header;
