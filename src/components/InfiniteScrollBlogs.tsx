import { useEffect, useState } from "react";

// Hooks
import useBlogs, { IBlog } from "../hooks/useBlogs";

// Components
import BlogCard from "./BlogCard";
import MotionDiv from "./MotionDiv";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default function InfiniteScrollBlogs() {
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const { loading, error, apiData } = useBlogs(page);

    useEffect(() => {
        if (apiData?.data.length === 10) {
            setHasMore(true);
            setBlogs([...blogs, ...apiData.data]);
        } else {
            setHasMore(false);
        }
    }, [apiData]);

    return (
        <>
            {error && (
                <h3 className="text-red-500 text-xl text-center font-ibm font-bold">
                    {error}
                </h3>
            )}
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={blogs.length}
                next={() => setPage(page + 1)}
                loader={<Spinner />}
                hasMore={hasMore}
                scrollThreshold={1}
                endMessage={
                    <p className="text-center font-ibm font-semibold text-lg text-gray-500">
                        That's all folks
                    </p>
                }
            >
                <MotionDiv>
                    {blogs.map((blog) => {
                        return <BlogCard key={blog._id} blog={blog} />;
                    })}
                </MotionDiv>
            </InfiniteScroll>
        </>
    );
}
