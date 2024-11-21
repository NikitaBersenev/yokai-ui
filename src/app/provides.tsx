'use client';

import {PropsWithChildren, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ThemeProvider} from "next-themes";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export function Providers({children}: PropsWithChildren) {
    const [clinet] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                }
            }
        })
    );

    return (
        <QueryClientProvider client={clinet}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </ThemeProvider>
        </QueryClientProvider>

    )

}