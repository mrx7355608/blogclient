import { useState, useEffect } from "react";

export interface IBlog {
    _id: string;
    title: string;
    blogBody: string;
    tags: string[];
    is_published: boolean;
    published_on: string;
}

type IApiResponse = {
    status: string;
    code: number;
    data: IBlog[];
    message: string;
};

export default function useBlogs(page: number) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [apiData, setApiData] = useState<IApiResponse | null>(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/blogs?page=${page}`)
            .then((resp) => resp.json())
            .then((data) => setApiData(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [page]);

    return { loading, error, apiData };
}
