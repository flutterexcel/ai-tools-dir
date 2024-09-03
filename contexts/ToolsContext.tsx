import { useDebounce } from "@/hooks/useDebounce";
import Tool from "@/types/tool";
import data from "@/utils/data";
import { createContext, useContext, useMemo, useState } from "react";

interface ToolsContextProps {
    tools: Tool[];
    bookmarkedTools: Tool[];
    filteredTools: Tool[];
    searchTerm: string;
    selectedCategory: string,
    selectedTags: string[],
    selectedRating: number,
    price: 'free' | 'Paid' | 'Subscription' | '',
    sortBy: 'rating' | 'createdAt',

    addFilter: (filter: 'category' | 'tags' | 'rating' | 'price' | 'sort', value: any) => void;
    addToBookmark: (id: number | string) => void;
    removeFromBookmark: (id: number | string) => void;
    setSearchTerm: (value: string) => void;
    setPrice: (value: 'free' | 'Paid' | 'Subscription' | '') => void;
}

const ToolsContext = createContext<ToolsContextProps>({
    tools: [],
    bookmarkedTools: [],
    filteredTools: [],
    searchTerm: '',
    selectedCategory: '',
    selectedTags: [],
    selectedRating: 0,
    price: '',
    sortBy: 'createdAt',

    addFilter: () => { },
    addToBookmark: () => { },
    removeFromBookmark: () => { },
    setSearchTerm: () => { },
    setPrice: () => { }
});

export const useToolsContext = () => {
    return useContext(ToolsContext);
}

export const ToolsProvider = ({ children }: { children: React.ReactNode }) => {
    const [bookmarkedToolIds, setBookmarkedToolIds] = useState<(number | string)[]>([]);
    const [tools, setTools] = useState<Tool[]>(data);

    // Filters
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [price, setPrice] = useState<'free' | 'Paid' | 'Subscription' | ''>('');

    // Sort By
    const [sortBy, setSortBy] = useState<'rating' | 'createdAt'>('createdAt');

    // Search Bar
    const [searchTerm, setSearchTerm] = useState<string>('');
    const search = useDebounce(searchTerm, 500);

    const bookmarkedTools = useMemo(() => {
        return tools.filter(tool => bookmarkedToolIds.includes(tool.id));
    }, [bookmarkedToolIds, tools])

    const filteredTools = useMemo(() => {
        const filteredTools = tools;
        const searchTerm = search.toLowerCase();

        return filteredTools.filter(tool => {
            if (search && !tool.name.toLowerCase().includes(searchTerm) && !tool.description.toLowerCase().includes(searchTerm)) {
                return false;
            }

            if (selectedCategory && tool.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
                return false;
            }

            if (selectedTags.length > 0) {
                let hasTag = false;
                tool.tags.forEach(tag => {
                    if (selectedTags.includes(tag)) {
                        hasTag = true;
                    }
                })
                if (!hasTag) {
                    return false;
                }
            }

            if (price && tool.price !== price) {
                return false;
            }

            if (selectedRating && tool.rating >= selectedRating) {
                return false;
            }

            return true;
        }).sort((a, b) => {
            if (sortBy === 'rating') {
                return b.rating - a.rating;
            } else {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
        })

    }, [selectedCategory, tools, price, selectedTags, selectedRating, sortBy, search]);

    const addFilter = (filter: 'category' | 'tags' | 'rating' | 'price' | 'sort', value: any) => {
        switch (filter) {
            case 'category':
                setSelectedCategory(value);
                break;
            case 'tags':
                setSelectedTags(value);
                break;
            case 'rating':
                setSelectedRating(parseInt(value));
                break;
            case 'price':
                setPrice(value as any);
                break;
            case 'sort':
                setSortBy(value as 'rating' | 'createdAt');
                break;
            default:
                break;
        }
    }

    const addToBookmark = (id: number | string) => {
        setBookmarkedToolIds([...bookmarkedToolIds, id]);
    }

    const removeFromBookmark = (id: number | string) => {
        setBookmarkedToolIds(bookmarkedToolIds.filter((toolId) => toolId !== id));
    }

    return (
        <ToolsContext.Provider value={{
            tools,
            bookmarkedTools,
            filteredTools,
            searchTerm,
            selectedCategory,
            selectedTags,
            selectedRating,
            price,
            sortBy,

            addFilter,
            addToBookmark,
            removeFromBookmark,
            setSearchTerm,
            setPrice
        }}>
            {children}
        </ToolsContext.Provider>
    )
}



export default ToolsContext