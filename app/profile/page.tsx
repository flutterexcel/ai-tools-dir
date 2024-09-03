'use client';

import { useSession } from 'next-auth/react';
import toolsData from '@/utils/data';
import Tool from '@/types/tool';
import CardList from '@/components/CardList';

const ProfilePage = () => {
    const { data: session } = useSession();

    if (!session) {
        return <div className='p-4 text-center mt-40'>Please sign in to view your profile</div>;
    }

    const bookmarkedTools: Tool[] = toolsData.filter((tool) => tool.bookmarked);

    return (
        <>
            <div className="p-4 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">My Profile</h1>
                <p>Welcome <b>{(session as any).user.name}</b> to your profile page!</p>
            </div>
            <h1 className="text-2xl font-bold mb-4 mt-20">My Bookmarked Tools</h1>
            <div className="grid grid-cols-2 gap-4">
                <CardList bookmark={true} />
            </div>
        </>
    );
};

export default ProfilePage;
