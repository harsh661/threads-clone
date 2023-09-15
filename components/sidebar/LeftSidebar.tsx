"use client"

import React from "react"
import { FaThreads } from "react-icons/fa6"
import { PiSignOut } from "react-icons/pi"
import { sidebarLinks } from "./sidebarLinks"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useClerk } from "@clerk/nextjs"

const LeftSidebar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { signOut } = useClerk()

  const sigoutUser = () => {
    signOut()
    router.push('/sign-in')
  }
  return (
    <section className="flex flex-col justify-between h-full w-full p-5">
      <FaThreads size={30} />
      <div className="flex flex-col items-start gap-3">
        {sidebarLinks.map(({ icon: Icon, label, path }) => {
          const isActive = path === pathname
          return (
            <Link
              key={path}
              href={path}
              className={`flex items-center gap-2 py-2 px-3 rounded-lg hover:text-white ${
                isActive ? "text-white bg-zinc-700/50" : "text-zinc-500"
              }`}
            >
              <Icon size={25} />
              <span>{label}</span>
            </Link>
          )
        })}
      </div>
      <div onClick={sigoutUser} className="flex items-center gap-2 cursor-pointer text-zinc-500 hover:text-white">
        <PiSignOut size={20} />
        <span>Logout</span>
      </div>
    </section>
  )
}

export default LeftSidebar
