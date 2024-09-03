import { useToolsContext } from "@/contexts/ToolsContext";

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useToolsContext()

    return (
        <input
            type="text"
            placeholder="Search AI tools..."
            className="w-full p-2 mb-4 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

export default SearchBar;
