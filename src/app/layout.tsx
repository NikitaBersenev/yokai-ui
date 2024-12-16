import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.scss";
import {ThemeProvider} from "next-themes";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import TheNavigation from "@/components/TheNavigation";
import Logo from "@/components/Logo";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import {SITE_NAME} from "@/constants/seo.constants";
import {Providers} from "@/app/provides";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });


export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
    description: "Habe website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <div className="min-h-screen flex flex-col justify-between">
                <TheHeader/>
                <div className="min-h-screen mx-10 sm:mx-20 md:mx-28 lg:mx-40 xl:mx-56 2xl:mx-56">
                    {children}
                </div>
                <TheFooter/>
            </div>
        </Providers>
        </body>
        </html>
    );
}
