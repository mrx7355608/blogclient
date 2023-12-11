type ITagComponentProps = {
    tag: string;
};

export default function Tag({ tag }: ITagComponentProps) {
    return (
        <div
            className="px-3 py-1 bg-transparent border-gray-500 text-gray-300 rounded-md font-ibm"
            style={{
                borderWidth: "1px",
            }}
        >
            {tag}
        </div>
    );
}
