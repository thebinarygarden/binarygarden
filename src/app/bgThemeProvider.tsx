'use client'
import { ThemeProvider } from "next-themes"

const BgThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default BgThemeProvider