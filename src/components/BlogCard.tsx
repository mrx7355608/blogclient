import Tag from "./Tag";
import { Link } from "react-router-dom";
import { IBlog } from "../hooks/useBlogs";

interface IBlogCardProps {
    blog: IBlog;
}

export default function BlogCard({ blog }: IBlogCardProps) {
    return (
        <div className="my-10">
            <Link to="/blog/my-slug">
                <h3 className="text-3xl lg:text-4xl font-bold cursor-pointer mb-2 mt-2 text-white font-ibm hover:underline">
                    {blog.title}
                </h3>
            </Link>
            <p className="mb-3 text-gray-400 font-ibm">{blog.published_on}</p>
            <div className="flex items-center gap-2 mb-4 mt-2">
                {blog.tags.map((tag, index) => {
                    return <Tag key={index} tag={tag} />;
                })}
            </div>
            <p
                className="mb-2 text-md lg:text-lg text-gray-200 font-ibm"
                style={{ wordSpacing: "2px" }}
            >
                {blog.blogBody.substring(0, 300)}...
            </p>

            <Link
                to="/blog/my-slug"
                className="text-blue-400 text-md lg:text-lg hover:underline font-ibm"
            >
                Read more
            </Link>
        </div>
    );
}
