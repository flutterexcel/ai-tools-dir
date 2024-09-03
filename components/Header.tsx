import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
    const { data: session } = useSession();

    return (
        <header className="p-4 bg-blue-500 text-white flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-2xl font-bold">
                <Link href="/">AI Tools Directory</Link>
            </h1>
            <div>
                {session ? (
                    <>
                        <Link href="/profile" className="mr-4">
                            Profile
                        </Link>
                        <button onClick={() => signOut()} className="mr-4">
                            Logout
                        </button>
                    </>
                ) : (
                    <button onClick={() => signIn("google")}>Sign In</button>
                )}
            </div>
        </header>
    );
};

export default Header;
