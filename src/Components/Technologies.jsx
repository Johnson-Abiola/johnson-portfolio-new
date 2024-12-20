import { Ri24HoursFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { MdHtml } from "react-icons/md";

import { MdCode } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";

import { motion } from "framer-motion";
import { FaCss3 } from "react-icons/fa";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap item-center justify-center gap-4"
      >
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-4 border-neutral-800 p-4"
        >
          <MdCode className="text-7xl text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-4 border-neutral-800 p-4"
        >
          <MdHtml className="text-7xl text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-4 border-neutral-800 p-4"
        >
          <FaCss3 className="text-7xl text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVar(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
