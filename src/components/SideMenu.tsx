import { FiGithub, FiTwitter } from "react-icons/fi";
import { HiOutlineCollection, HiOutlineHome, HiOutlineIdentification } from "react-icons/hi";
import PageLink from "./PageLink";

export const SideMenu = () => {
  return (
    <aside className="overflow-hidden transition-all -translate-x-48 md:translate-x-0 fixed w-48 h-screen border-r bg-black border-neutral-800 text-zinc-300 md:flex justify-between flex-col z-10">
      <menu className="flex flex-col p-4 gap-4 font-semibold">
        <PageLink href={"/"}>
          <div className="flex gap-2 rounded px-4 py-2 items-center">
            <HiOutlineHome className="text-2xl" />
            <p>Home</p>
          </div>
        </PageLink>
        <PageLink href={"/about"}>
          <div className="flex gap-2 rounded px-4 py-2 items-center">
            <HiOutlineIdentification className="text-2xl" />
            <p>About</p>
          </div>
        </PageLink>
        <PageLink href={"/projects"}>
          <div className="flex gap-2 rounded px-4 py-2 items-center">
            <HiOutlineCollection className="text-2xl" />
            <p>Projects</p>
          </div>
        </PageLink>
      </menu>
      <div className="flex p-8 items-center flex-col">
        <div className="flex flex-row gap-4">
          <a
            className="text-zinc-300 hover:text-white transition-all"
            target="_blank"
            href="https://github.com/oonis"
            rel="noopener noreferrer"
          >
            <FiGithub className="text-2xl" />
          </a>
          <a
            className="text-zinc-300 hover:text-white transition-all"
            target="_blank"
            href="https://twitter.com/willsc8forwings"
            rel="noopener noreferrer"
          >
            <FiTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </aside>
  );
};
