import React, { useState } from "react";
import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
    const [query, setQuery] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        alert(query);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <form className="relative w-full mt-7" onSubmit={handleSubmit}>
            <input
                placeholder="Search"
                type="text"
                className="w-full border-2 text-white py-3 rounded-md px-4 border-gray-500"
                onChange={handleChange}
            />
            <button
                className="bg-transparent absolute top-4 right-5 mt-0.5"
                type="submit"
            >
                <FaSearch size={16} />
            </button>
        </form>
    );
}
