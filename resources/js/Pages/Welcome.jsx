import { Link, Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome({ auth, nfts }) {
    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        user_id: "",
        nft_id: 0,
    });
    return (
        <>
            <Head title="Explore" />
            <div className="bg-black min-h-screen">
                <div id="navigation" className="relative w-full h-full">
                    <div className=" flex p-6 items-center justify-between">
                        <div>
                            <span className="text-xl font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                NFT Showcase
                            </span>
                        </div>
                        <div>
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Anmelden
                                </Link>
                            )}
                        </div>
                    </div>
                    <div
                        id="after_navigation"
                        className="abslolute min-w-full h-2 bg-gradient-to-r from-purple-500 p-1 to-pink-700 -bottom-5 left-0"
                    ></div>
                </div>
                <div
                    className=""
                    style={{
                        backgroundColor: "#000000",
                        opacity: "0.8",
                        backgroundImage:
                            "linear-gradient(#161616 1px, transparent 1px), linear-gradient(to right, #161616 1px, #000000 1px)",
                        backgroundSize: "20px 20px",
                    }}
                >
                    <div
                        id="cards"
                        className="flex lg:flex-row flex-col flex-wrap gap-32 mt-10 p-20 items-center justify-center "
                    >
                        {nfts.map((nft) => (
                            <div className="bg-black w-fit h-fit group rounded-xl">
                                <div className="relative">
                                    <img
                                        className="w-48 rounded-xl"
                                        src={"/" + nft["image_url"]}
                                        alt={nft["image_url"]}
                                    />
                                    <img
                                        className="w-48 absolute top-0 left-0 blur-xl -z-10 rounded-xl"
                                        src={"/" + nft["image_url"]}
                                        alt={nft["image_url"]}
                                    />
                                    <div className="w-full absolute bottom-0 left-0 rounded-xl">
                                        <div className="relative">
                                            <div className="relative p-2 z-10">
                                                <span className="text-xl font-bold text-white">
                                                    {nft.name}
                                                </span>
                                                <p className="text-white">
                                                    {nft.description}
                                                </p>
                                            </div>
                                            <div className="opacity-50 rounded-xl absolute top-0 left-0 bg-gradient-to-r from-purple-500 p-1 to-pink-700  w-full h-full z-0"></div>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-r rounded-xl duration-500 from-purple-500 p-1 to-pink-700 absolute -left-1 -top-1 -z-10 w-1/2 group-hover:-left-5 group-hover:-top-5 transition-all h-1/2"></div>
                                    <div className="bg-gradient-to-r rounded-xl duration-500 from-purple-500 p-1 to-pink-700 absolute -right-1 -bottom-1 -z-10 w-1/2 group-hover:-right-5 group-hover:-bottom-5 transition-all h-1/2"></div>
                                    <div className="bg-gradient-to-r rounded-xl duration-700 from-purple-500 p-1 to-pink-700 absolute -top-1 -right-1 -z-10 w-1/2 group-hover:-top-4 group-hover:-right-2 transition-all h-24"></div>
                                    {auth.user ? (
                                        <div>
                                            <div
                                                className="bg-gradient-to-r group-hover:z-10 cursor-pointer px-5 rounded-xl duration-500 from-purple-500 p-1 to-pink-700 absolute -right-1 -bottom-5  transition-all"
                                                onClick={() => {
                                                    /*
                                        setData("nft_id", nft.id);
                                        setData("user_id", auth.user.id);

                                        put(route("nft.update"), {
                                            preserveScroll: true,
                                            onSuccess: reset(),
                                            onError: (errors) => {
                                                if (errors.nft) {
                                                    alert(
                                                        "nft already taken"
                                                    );
                                                }
                                            },
                                        });
                                        */
                                                }}
                                            >
                                                <p className="text-white px-3 font-bold group-hover:text-2xl duration-500 transition-all">
                                                    {nft.price} €
                                                    <span className="opacity-0 group-hover:opacity-100">
                                                        +
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="bg-gradient-to-r from-purple-500 p-1 -z-10 blur-xl to-pink-700 absolute -right-1 -bottom-1  transition-all">
                                                <span className="text-white px-3 font-bold">
                                                    {nft.price} €
                                                </span>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
