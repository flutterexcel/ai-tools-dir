import { useToolsContext } from '@/contexts/ToolsContext';

const FilterPanel = () => {
    const {
        selectedCategory,
        price,
        selectedRating,
        selectedTags,
        addFilter
    } = useToolsContext();

    const categories = ['Content Creation', 'Machine Learning', 'Automation'];
    const tags = ['Virtual assistant', 'OpenAI', 'Conversational AI', 'video editing', 'question answering', 'Prompt Engineering', 'Contextual Awareness', 'GPT-4', 'text generation'];
    const prices = ['Free', 'Paid', 'Subscription'];
    const ratings = [1, 2, 3, 4, 5];

    const handleCategoryChange = (category: string) => {
        if (selectedCategory === category) {
            addFilter('category', '');
            return;
        }
        addFilter('category', category);
    };

    const handleTagChange = (tag: string) => {
        if (selectedTags.includes(tag)) {
            addFilter('tags', selectedTags.filter(t => t !== tag));
            return;
        }
        addFilter('tags', [selectedTags, tag].flat());
    };

    const handleRatingChange = (rating: number) => {
        if (selectedRating === rating) {
            addFilter('rating', 0);
            return;
        }
        addFilter('rating', rating);
    };

    const handlePriceChange = (price: string) => {
        if (price === price) {
            addFilter('price', '');
            return;
        }
        addFilter('price', price);
    };

    return (
        <div className="w-1/4 p-4 bg-gray-100 sticky top-60">
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            <div className="mb-4">
                <h4 className="font-semibold">Category</h4>
                <ul>
                    {categories.map((category) => (
                        <li key={category}>
                            <button
                                className={`p-2 w-full text-left ${selectedCategory === category ? 'bg-blue-200' : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold">Tags</h4>
                <ul>
                    {tags.map((tag) => (
                        <li key={tag}>
                            <button
                                className={`p-2 w-full text-left ${selectedTags.includes(tag) ? 'bg-blue-200' : ''}`}
                                onClick={() => handleTagChange(tag)}
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold">Price</h4>
                <ul>
                    {prices.map((tag) => (
                        <li key={tag}>
                            <button
                                className={`p-2 w-full text-left ${price === tag ? 'bg-blue-200' : ''}`}
                                onClick={() => handlePriceChange(tag)}
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold">Rating</h4>
                <ul>
                    {ratings.map((rating) => (
                        <li key={rating}>
                            <button
                                className={`p-2 w-full text-left ${selectedRating === rating ? 'bg-blue-200' : ''}`}
                                onClick={() => handleRatingChange(rating)}
                            >
                                {rating} Stars & Up
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FilterPanel;
