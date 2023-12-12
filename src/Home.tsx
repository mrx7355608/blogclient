import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import InfiniteScrollBlogs from "./components/InfiniteScrollBlogs";

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="flex flex-col gap-8 p-4 mx-auto w-full lg:w-7/12">
                <Searchbar />
                <InfiniteScrollBlogs />
            </div>
        </React.Fragment>
    );
}
