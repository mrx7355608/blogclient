import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import useBlogs, { IApiResponse } from "../hooks/useBlogs";
import BlogCard from "./BlogCard";
import MotionDiv from "./MotionDiv";

export default function InfiniteScroll() {
    const [page, setPage] = useState<number>(1);
    const { loading, error, apiData } = useBlogs(page);

    const motionDivRef = useRef<HTMLDivElement>(null);
    const inView = useInView(motionDivRef);

    useEffect(() => {
        if (inView) {
            setPage(page + 1);
            alert(page);
        }
    }, [inView, page]);

    return (
        <>
            <MotionDiv>
                {apiData &&
                    apiData.data.map((blog) => {
                        return <BlogCard key={blog._id} blog={blog} />;
                    })}
            </MotionDiv>
        </>
    );
}
