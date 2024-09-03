import { useToolsContext } from "@/contexts/ToolsContext";

const SortingButtons = () => {
    const { sortBy, addFilter } = useToolsContext()

    return (
        <div className="mb-4">
            <button onClick={() => addFilter('sort', 'rating')} className="mr-2 p-2 border rounded-md disabled:opacity-55" disabled={sortBy === 'rating'}>Sort by Rating</button>
            <button onClick={() => addFilter('sort', 'createdAt')} className="p-2 border rounded-md disabled:opacity-55" disabled={sortBy === 'createdAt'}>Sort by Date</button>
        </div>
    );
};

export default SortingButtons;
