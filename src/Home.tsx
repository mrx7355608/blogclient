import React from "react";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import Searchbar from "./components/Searchbar";
import useBlogs from "./hooks/useBlogs";

export default function Home() {
    const { loading, error, apiData } = useBlogs(1);

    return (
        <React.Fragment>
            <Navbar />
            <div className="flex flex-col gap-8 p-4 mx-auto w-full lg:w-7/12">
                <Searchbar />
                {loading && <h3 className="text-green-600">Loading...</h3>}
                {error && <h3 className="text-red-600">{error}</h3>}
                {apiData
                    ? apiData.data.map((blog) => {
                          return <BlogCard key={blog._id} blog={blog} />;
                      })
                    : null}
            </div>
        </React.Fragment>
    );
}
