'use client'

import Tool from '@/types/tool';
import toolsData from '@/utils/data';
import Layout from '@/components/Layout';
import { useParams } from 'next/navigation';

// Default image if no image is provided
const defaultImage = 'https://ebsedu.org/wp-content/uploads/elementor/thumbs/AI-Artificial-Intelligence-What-it-is-and-why-it-matters-qb1o8gpaeu2d4z5h27m45d99w1tmlkjwinh4wq1izi.jpg';


const ToolDetailPage = () => {
  const { id } = useParams();
  const tool: Tool | undefined = toolsData.find((tool) => tool.id === id);

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <Layout>
      <div className="p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={defaultImage} alt={tool.name} className="w-full h-60 object-cover mb-4" />
        <h1 className="text-2xl font-bold mb-2">{tool.name}</h1>
        <p className="mb-2">{tool.description}</p>
        <p className="mb-2"><strong>Category:</strong> {tool.category}</p>
        <p className="mb-2"><strong>Features:</strong> {tool.features.join(', ')}</p>
        <a href={tool.website} className="text-blue-500">Visit Website</a>
      </div>
    </Layout>
  );
};

export default ToolDetailPage;
