import './globals.css'
import { ThemeProvider, ScriptPreloadTheme } from '@binarygarden/flora/theme';
import { lightTheme, darkTheme } from '@/app/themes';

export const metadata = {
  title: 'Binary Garden',
  description: 'Open source for the people',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head>
          <ScriptPreloadTheme lightTheme={lightTheme} darkTheme={darkTheme} />
      </head>
      <body className={"bg-(--background)"}>
      <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
          {children}
      </ThemeProvider>
      <br/><br/><br/>
      </body>
    </html>
  )
}
