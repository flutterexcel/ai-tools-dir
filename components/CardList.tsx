import Tool from "@/types/tool";
import ToolCard from "@/components/ToolCard";
import { useToolsContext } from "@/contexts/ToolsContext";

interface CardListProps {
    bookmark: boolean
}

const CardList = ({ bookmark }:CardListProps) => {
    const { bookmarkedTools, filteredTools } = useToolsContext()
    const tools = bookmark ? bookmarkedTools : filteredTools

    if (tools.length === 0) {
        return (
            <p className="text-center mt-12">No tools found</p>
        )
    }

    return tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
    ))
}

export default CardList