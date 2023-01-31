import { useState, useEffect } from "react";

import { Card, Loader, FormField } from "../components/exportComponents";

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        const cardsToRender = data.map((item) => (
            <Card key={item._id} {...item} />
        ));
        return cardsToRender;
    }

    return (
        <h2 className="mt-5 text-xl font-bold uppercase text-[#6449ff]">
            {title}
        </h2>
    );
};

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [searchedResults, setSearchedResults] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);

    useEffect(() => {
        const fetchAllPosts = async () => {
            setLoading(true);

            try {
                const getAllPosts = await fetch(
                    "https://dall-e-clone-kud3.onrender.com/api/post",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (getAllPosts.ok) {
                    const getAllPostsResult = await getAllPosts.json();
                    setAllPosts(getAllPostsResult.data.reverse());
                }
            } catch (error) {
                alert(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllPosts();
    }, []);

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);

        setSearchText(e.target.value);
        setSearchTimeout(
            setTimeout(() => {
                const searchResults = allPosts.filter(
                    (item) =>
                        item.name
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        item.description
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                );

                setSearchedResults(searchResults);
            }, 500)
        );
    };

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
                <FormField
                    type="text"
                    name="text"
                    placeholder="Search posts"
                    value={searchText}
                    handleChange={handleSearchChange}
                />
            </div>

            <div className="mt-10">
                {loading ? (
                    <div className="flex items-center justify-center">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className="mb-3 text-xl font-medium text-[#666e75]">
                                Generierte Ergebnisse für{" "}
                                <span className="text-[#222328]">
                                    {searchText}
                                </span>
                            </h2>
                        )}
                        <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                            {searchText ? (
                                <RenderCards
                                    data={searchedResults}
                                    title="No search results found"
                                />
                            ) : (
                                <RenderCards
                                    data={allPosts}
                                    title="No posts found"
                                />
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Home;
