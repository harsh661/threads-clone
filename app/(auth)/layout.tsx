import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="h-full flex items-center justify-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
