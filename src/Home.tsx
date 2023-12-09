import React from "react";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import Searchbar from "./components/Searchbar";

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="flex flex-col gap-8 p-4 mx-auto w-full lg:w-7/12">
                <Searchbar />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </React.Fragment>
    );
}
