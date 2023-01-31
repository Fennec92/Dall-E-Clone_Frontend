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
    const [creatingImage, setCreatingImage] = useState(false);
    const [sharing, setSharing] = useState(false);

    console.log(form);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleRandomDescription = () => {
        const randomDesc = getRandomDescription(form.description);
        setForm((prev) => {
            return {
                ...prev,
                description: randomDesc,
            };
        });
    };

    const createImage = async () => {
        if (form.description) {
            try {
                setCreatingImage(true);
                const openAiRouteResponse = await fetch(
                    "https://dall-e-clone-kud3.onrender.com/api/openai",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ description: form.description }),
                    }
                );
                const getImageFromDalle = await openAiRouteResponse.json();
                setForm((prev) => {
                    return {
                        ...prev,
                        image: `data:image/jpeg;base64,${getImageFromDalle.image}`,
                    };
                });
            } catch (error) {
                alert(error);
            } finally {
                setCreatingImage(false);
            }
        } else {
            alert("Bitte eine Beschreibung angeben");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.description && form.image) {
            setSharing(true);

            try {
                const postResponse = await fetch(
                    "https://dall-e-clone-kud3.onrender.com/api/post",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(form),
                    }
                );

                await postResponse.json();
                navigate("/");
            } catch (error) {
                alert(error);
            } finally {
                setSharing(false);
            }
        } else {
            alert("Kein Bild zum teilen erstellt");
        }
    };

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
                        placeholder="Max Mustermann"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField
                        labelName="Beschreibe das Bild"
                        type="text"
                        name="description"
                        placeholder="a cat submarine chimera, digital art"
                        value={form.description}
                        handleChange={handleChange}
                        isRandomDescription
                        handleRandomDescription={handleRandomDescription}
                    />
                    <div className="flex h-64 w-64 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        {creatingImage ? (
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
                                className="h-3/4 w-3/4 opacity-30"
                            />
                        )}
                    </div>
                </div>
                <div className="mt-5">
                    <button
                        className="w-full rounded-md bg-green-700 px-5 py-2.5 text-sm font-medium text-white sm:w-auto"
                        type="button"
                        onClick={createImage}
                    >
                        {creatingImage ? "OK..." : "Erstellen"}
                    </button>
                    <div className="mt-10">
                        <p className="text-sm text-[#666e75]">
                            Wenn du mit dem Ergebnis zufrieden bist, kannst du
                            es mit der Community teilen!
                        </p>
                        <button
                            className="mt-3 w-full rounded-md bg-blue-700 px-4 py-2.5 text-sm font-medium text-white sm:w-auto"
                            type="submit"
                        >
                            {sharing ? "Teile..." : "Teilen"}
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};
export default Create;
