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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {};

    const handleRandomDescription = () => {};

    return (
        <section className="mx-auto max-w-7xl">
            <div>
                <h1 className="text-[2rem] font-extrabold text-[#222328]">
                    Neu erstellen
                </h1>
                <p className="mt-2 max-w-[500px] text-[1rem] text-[#666e75]">
                    {" "}
                    Erstelle und teile phantasievolle und optisch atemberaubende
                    Bilder mit der DALL-E KI.
                </p>
            </div>

            <form className="mt-16 max-w-3xl" onClick={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <FormField
                        labelName="Dein Name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField
                        labelName="Beschreibe das Bild"
                        type="text"
                        name="description"
                        placeholder="the world of the book 1984 by george orwell"
                        value={form.description}
                        handleChange={handleChange}
                        isRandomDescription
                        handleRandomDescription={handleRandomDescription}
                    />
                    <div className="relative flex h-64 w-64 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        {generatingImage ? (
                            <Loader />
                        ) : form.image ? (
                            <img
                                src={form.image}
                                alt={form.description}
                                className="h-full w-full object-contain"
                            />
                        ) : (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-3/4 opacity-30"
                            />
                        )}
                    </div>
                </div>
            </form>
        </section>
    );
};
export default Create;
