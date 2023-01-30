import { download } from "../assets/exportAssets";
import { downloadImage } from "../utilityFunctions/exportUtilityFunctions";

const Card = ({ _id, name, description, image }) => {
    return (
        <div className="card group relative rounded-xl shadow-card hover:shadow-cardhover">
            <img
                src={image}
                alt={description}
                className="h-auto w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 m-2 max-h-[50%] flex-col rounded-md bg-[#10131f] p-4 group-hover:flex">
                <p className="description overflow-y-auto text-sm text-white">
                    {description}
                </p>
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-green-700">{name[0]}</div>
                </div>
            </div>
        </div>
    );
};
export default Card;
