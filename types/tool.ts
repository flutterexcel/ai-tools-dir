export default interface Tool {
    id: string;
    name: string;
    description: string;
    category: string;
    createdAt: number;
    updatedAt: number;
    version: string;
    rating: number;
    website: string;
    price: string;
    tags: string[];
    image: string;
    features: string[];
    author: string;
    bookmarked?: boolean;
}
