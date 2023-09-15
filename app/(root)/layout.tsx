import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import NavigationBar from "@/components/NavigationBar"
import LeftSidebar from "@/components/sidebar/LeftSidebar"
import RightSidebar from "@/components/sidebar/RightSidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="flex h-full">
            <LeftSidebar />
            <section className="container">
              <div className="w-full">{children}</div>
            </section>
            <RightSidebar />
          </main>

          <NavigationBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
