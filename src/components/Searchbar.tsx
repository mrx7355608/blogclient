import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
    return (
        <div className="relative w-full mt-7">
            <input
                placeholder="Search"
                type="text"
                className="w-full border-2 text-white py-3 rounded-md px-4 border-gray-500"
            />
            <button className="bg-transparent absolute top-4 right-5 mt-0.5">
                <FaSearch size={16} />
            </button>
        </div>
    );
}
