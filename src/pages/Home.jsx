import { useState, useEffect } from "react";

import { Card, Loader, FormField } from "../components/exportComponents";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    return (
        <section className="mx-auto max-w-7xl">
            <div>
                <h1 className="text-[2rem] font-extrabold text-[#222328]">
                    Kunstwerke der Community
                </h1>
                <p className="mt-2 max-w-[500px] text-[1rem] text-[#666e75]">
                    Hier kannst du unsere Kollektion aus phantasievollen und
                    optisch atemberaubenden Bildern durchstöbern, die von DALL-E
                    erschaffen wurden.
                </p>
            </div>

            <div className="mt-16">
                <FormField />
            </div>
        </section>
    );
};

export default Home;
