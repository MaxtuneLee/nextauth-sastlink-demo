import { OAuthConfig, OAuthUserConfig } from "next-auth/providers"


export interface SASTProfile extends Record<string, any> {
    email: string
}

export default function SASTLink<P extends SASTProfile>(
    options: OAuthUserConfig<P>
): OAuthConfig<P> {
    return {
        id: "sastlink",
        name: "SASTLink",
        type: "oauth",
        authorization: {
            url: "https://link.sast.fun/auth",
            params: { scope: "all", state: "xyz", code_challenge: 'YillThSRrGTj6mXqFfDPinX7G35qEQ1QEyWV6PDSEuc%3D', code_challenge_method: 'S256' }
        },
        token: `${process.env.BASE_URL}/oauth2/token`,
        idToken: true,
        userinfo: `${process.env.BASE_URL}/user/info`,
        profile(profile) {
            return {
                id: profile.email.split("@")[0],
                email: profile.email
            }
        },
        style: {
            logo: "http://localhost:3000/linklogo.svg",
            logoDark: "http://localhost:3000/linklogodark.svg",
            bgDark: "#000",
            bg: "#fff",
            text: "#000",
            textDark: "#fff",
        },
        options,
    }
}
