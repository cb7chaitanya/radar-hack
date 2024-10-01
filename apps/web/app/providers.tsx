import AppWalletProvider from "@/components/AppWalletProvider";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AppWalletProvider>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </AppWalletProvider>
        </>
    )
}