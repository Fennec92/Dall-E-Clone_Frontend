import { download } from "../assets/exportAssets";
import { downloadImage } from "../utilityFunctions/exportUtilityFunctions";

const Card = ({ _id, name, description, image }) => {
    return (
        <div className="card group relative rounded-xl shadow-sm hover:shadow-2xl">
            <img
                src={image}
                alt={description}
                className="h-auto w-full rounded-xl object-cover"
                loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 m-2 hidden max-h-[95%] flex-col rounded-md bg-[#10131f] p-4 group-hover:flex sm:max-h-[50%]">
                <p className="description text-md overflow-y-auto text-white">
                    {description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                            {name[0].toUpperCase()}
                        </div>
                        <p className="text-sm text-white">{name}</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => downloadImage(_id, image)}
                    >
                        <img
                            className="h-6 w-6 invert"
                            src={download}
                            alt="download"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Card;
