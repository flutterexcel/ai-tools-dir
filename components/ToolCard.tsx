import Link from 'next/link';
import Tool from '@/types/tool';
import { useToolsContext } from '@/contexts/ToolsContext';

// Default image if no image is provided
const defaultImage = 'https://ebsedu.org/wp-content/uploads/elementor/thumbs/AI-Artificial-Intelligence-What-it-is-and-why-it-matters-qb1o8gpaeu2d4z5h27m45d99w1tmlkjwinh4wq1izi.jpg';

interface ToolCardProps {
    tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
    const { addToBookmark, removeFromBookmark, bookmarkedTools } = useToolsContext()
    const clickHandler = () => {
        if (tool.bookmarked) {
            removeFromBookmark(tool.id);
        } else {
            addToBookmark(tool.id);
        }
    }

    return (
        <div className="border p-4 rounded-md shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={defaultImage} alt={tool.name} className="w-full aspect-video object-cover mb-4" />
            <h2 className="text-lg font-bold mb-2">{tool.name}</h2>
            <p className="text-sm mb-2">{tool.description}</p>

            <div className='flex items-center justify-between'>
                <Link href={`/tool/${tool.id}`} className="text-blue-500">
                    View Details
                </Link>

                <button className='hover:bg-slate-100 active:scale-95 transition' onClick={clickHandler}>
                    {tool.bookmarked ? <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="-4 0 30 30"
                    >
                        <title>{"bookmark"}</title>
                        <path
                            fill="#000"
                            fillRule="evenodd"
                            d="M18 0H4a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4l7-7 7 7a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4"
                        />
                    </svg> :
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="-4 0 30 30"
                        >
                            <title>{"bookmark"}</title>
                            <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M20 26a2 2 0 0 1-2 2l-7-7-7 7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v22ZM18 0H4a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4l7-7 7 7a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
                            />
                        </svg>}
                </button>
            </div>
        </div>
    );
};

export default ToolCard;
