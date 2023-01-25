import { Link } from "react-router-dom";
import { logo } from ".././assets/exportAssets";

const Header = () => {
    return (
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
            <Link to="/">
                <img src={logo} alt="logo" className="w-8 object-contain" />
            </Link>
        </header>
    );
};
export default Header;
