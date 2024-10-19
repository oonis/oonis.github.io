import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { SideMenu } from "../components/SideMenu";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sam&apos;s personal website</title>
            </Head>
            <SideMenu/>
            <div className="h-[100vh] flex flex-col items-center justify-center text-zinc-300 text-3xl font-semibold">
                <motion.div animate={{ opacity: [0, 1], x: [-20, 0] }} transition={{ duration: 0.4 }} className="md:pl-56 pl-8 pr-8 flex flex-col md:flex-row">
                    <div>
                        <Image src="/images/avatar.jpg" alt="avatar" layout="fixed" className="rounded-2xl"width={128} height={128}/>
                    </div>
                    <section className="md:pl-8 lg:w-[32rem]">
                        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#D8B7EE] via-[#E494AC] to-[#A1CBF7]">Hello there.</h1>
                        <p className="font-normal text-lg">
                            Hello! The website is currently (slowly) being redesigned and refactored. But welcome!
                        </p>
                    </section>
                </motion.div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
