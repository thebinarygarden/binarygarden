import './globals.css'
import BgThemeProvider from "@/app/bgThemeProvider";

export const metadata = {
  title: 'Binary Garden',
  description: 'Open source for the people',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={"bg-[#F8FAFC] dark:bg-[#0B1121]"}>
      <BgThemeProvider>
          {children}
      </BgThemeProvider>
      <br/><br/><br/>
      </body>
    </html>
  )
}
