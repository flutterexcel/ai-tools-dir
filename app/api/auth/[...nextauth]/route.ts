import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.expiresAt = account.expires_at;
            }

            if (profile) {
                token.email = profile.email;
                token.name = profile.name;

                // @ts-ignore
                token.picture = profile.picture;
            }

            return token;
        },
        async session({ session, token }) {
            session.user = {
                // @ts-ignore
                id: token.sub,
                email: token.email,
                name: token.name,
                image: token.picture
            };

            return session;
        },
    },
});

export { handler as GET, handler as POST };
