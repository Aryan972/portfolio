import Link from "next/link";
import Profile from "./profile";
import ModeToogle from "./mode-toggle";
import { Button } from "../ui/button";
import UserCommandButton from "./command-button";

const Navbar = () => {
  const navItems = [
    { name: "My Stack", href: "/#stack" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Achievements", href: "/#achievements" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] border-b border-dashed bg-background/70 backdrop-blur-md">
      <div className="container mx-auto max-w-4xl flex justify-between items-center font-poppins px-6 py-4">
        <div className="flex items-end gap-5">
          <Profile className="rounded-lg h-10 w-10" />
          <ul className="items-center gap-5 hidden md:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm lg:text-lg hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <UserCommandButton />
          <ModeToogle />
        </div>
      </div>
    </div>
  )
}

export default Navbar