import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '~/lib/prisma'
import { compare } from 'bcrypt'

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET)
  throw new Error('Failed to initialize Github authentication')

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          gh_username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    }),
    CredentialsProvider({
      credentials: {},
      // @ts-ignore
      async authorize(credentials, _) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        if (!email || !password) {
          throw new Error('Missing username or password')
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        })
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.password))) {
          throw new Error('Invalid username or password')
        }
        return user
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  cookies: {
    sessionToken: {
      name: `${VERCEL_DEPLOYMENT ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        // When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
        domain: VERCEL_DEPLOYMENT ? '.wesbitty.org' : undefined,
        secure: VERCEL_DEPLOYMENT,
      },
    },
  },
  session: { strategy: 'jwt' },
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        username: user.username,
      },
    }),
  },
}

export default NextAuth(authOptions)
