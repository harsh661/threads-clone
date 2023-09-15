import { IconType } from "react-icons"
import { HiOutlineHeart } from "react-icons/hi"
import { FiUser } from "react-icons/fi"
import { MdOutlineSearch } from "react-icons/md"
import { RiHome5Line } from "react-icons/ri"
import { IoMdAdd } from "react-icons/io"

type SidbarLinks = {
  path: string
  icon: IconType
  label: string
}

export const sidebarLinks: SidbarLinks[] = [
  {
    path: '/',
    icon: RiHome5Line,
    label: "Home",
  },
  {
    path: '/search',
    icon: MdOutlineSearch,
    label: "Search",
  },
  {
    path: '/activity',
    icon: HiOutlineHeart,
    label: "Activity",
  },
  {
    path: '/profile',
    icon: FiUser,
    label: "Profile"
  },
  {
    path: '/create',
    icon: IoMdAdd,
    label: "Create"
  }
]
