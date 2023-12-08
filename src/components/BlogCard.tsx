import Tag from "./Tag";

export default function BlogCard() {
    return (
        <div className="my-5">
            <h3 className="text-4xl font-bold cursor-pointer mb-2 mt-2 text-white font-ibm hover:underline">
                Ricing Linux - Customizing terminal
            </h3>
            <p className="mb-3 text-gray-400 font-ibm">Tues 02 December 2023</p>

            <div className="flex items-center gap-2 mb-4 mt-2">
                <Tag />
                <Tag />
            </div>
            <p
                className="mb-2 text-lg text-gray-200 font-ibm"
                style={{ wordSpacing: "2px" }}
            >
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est
                aliquip...
            </p>
            <a
                href="/"
                className="text-blue-400 text-lg hover:underline font-ibm"
            >
                Read more
            </a>
        </div>
    );
}