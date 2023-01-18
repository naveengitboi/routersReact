import React from "react";
import { motion } from "framer-motion";

export const divVariants = {
  hidden: {
    y: "200px",
    opacity: 0,

  },
  visible: {

    y: "0",
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const pageVariants ={
  exit: {
    scale:0,
    opacity:0,
    zIndex:-1, 
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

function Home() {
  return (
    <motion.section variants={pageVariants} exit= 'exit' className="home">
      <motion.div variants={divVariants} initial="hidden" animate="visible">
        <h1 className="mainHeading">Home Section</h1>
        <p className="para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, eius
          exercitationem animi enim quaerat ab fugit labore minus culpa nihil
          quae rerum, aperiam necessitatibus facilis delectus in voluptatem unde
          atque a. Repellendus dicta, modi sint voluptate praesentium
          dignissimos veritatis excepturi magni aliquam. Beatae commodi sint
          omnis officiis distinctio recusandae labore?
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Home;
