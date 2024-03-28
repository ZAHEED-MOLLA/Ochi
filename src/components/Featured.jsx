import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Featured() {
  const cardAnimations = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    cardAnimations[index].start({ y: 0 });
  };

  const handleHoverEnd = (index) => {
    cardAnimations[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className="relative w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl text-zinc-800 font-Neue_Montreal tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cardAnimations[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.054 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cardAnimations[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.054 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHoverStart(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cardAnimations[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.054 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHoverStart(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl">
              {"PRIMEMUMBLEND".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cardAnimations[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.054 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
