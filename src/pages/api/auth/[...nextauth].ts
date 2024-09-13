import NextAuth, { CookiesOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginNextAuth } from "@/services/auth.service";
import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore

const useSecureCookies = (process.env.NEXTAUTH_URL as string).startsWith("https://");
const cookiePrefix = useSecureCookies ? "___Secure-" : "";

const cookies: Partial<CookiesOptions> = {
  sessionToken: {
    name: `${cookiePrefix}next-auth.session-token_`,
    options: {
      httpOnly: true,
      sameSite: false,
      path: "/",
      secure: useSecureCookies,
      domain: process.env.NODE_ENV === "development" ? "localhost" : "mono-lac-six.vercel.app",
    },
  },
  callbackUrl: {
    name: `__Secure-next-auth.callback-url_`,
    options: {
      httpOnly: true,
      sameSite: false,
      path: "/",
      secure: useSecureCookies,
    },
  },

  pkceCodeVerifier: {
    name: `next-auth.pkce.code_verifier_`,
    options: {
      httpOnly: true,
      sameSite: false,
      path: "/",
      secure: useSecureCookies,
    },
  },
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          try {
            const response: any = await loginNextAuth({
              password: credentials?.password as string,
              email: credentials?.username as string,
            });
            if (response) {
              return response;
            } else {
              return null;
            }
          } catch (e) {
            const errorMessage = "auth error";
            throw new Error(errorMessage);
          }
        },
      }),
    ],

    secret: process.env.JWT_SECRET,

    session: {
      strategy: "jwt",
    },

    jwt: {
      secret: process.env.JWT_SECRET,
    },

    pages: {},

    callbacks: {
      session: async ({ session, token, user }) => {
        //@ts-ignore
        session.accessToken = token.token;
        token.user = token.user;
        //@ts-ignore
        session.user = token.user;
        return session;
      },
      jwt: async ({ token, user, account }) => {
        user && (token.user = user);
        return Promise.resolve(token);
      },
      async redirect({ url, baseUrl }) {
        // Allows relative callback URLs
        if (url.startsWith("/")) {
          return `${baseUrl}${url}`;
        }
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) {
          return url;
        }
        return baseUrl;
      },
    },
    // debug: true,
    useSecureCookies,
    cookies,
  });
}
