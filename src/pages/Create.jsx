import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets/exportAssets";
import { getRandomDescription } from "../utilityFunctions/exportUtilityFunctions";
import { FormField, Loader } from "../components/exportComponents";

const Create = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        description: "",
        image: "",
    });
    const [generatingImage, setGeneratingImage] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <section className="mx-auto max-w-7xl">
            <div>
                <h1 className="text-[2rem] font-extrabold text-[#222328]">
                    Neu erstellen
                </h1>
                <p className="mt-2 max-w-[500px] text-[1rem] text-[#666e75]">
                    {" "}
                    Erstelle phantasievolle und optisch atemberaubende Bilder
                    mit der DALL-E KI.
                </p>
            </div>
        </section>
    );
};
export default Create;
