import { SideMenu } from "../components/SideMenu";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Cards() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <SideMenu />
      <motion.div
        animate={{ opacity: [0, 1], x: [-20, 0] }}
        transition={{ duration: 0.4 }}
        className="md:pl-56 px-8 pt-8 pb-32 text-zinc-300"
      >
        <p className="">My publicly available projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border flex bg-black rounded border-neutral-800 hover:border-white transition-all">
            Putting Around
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
