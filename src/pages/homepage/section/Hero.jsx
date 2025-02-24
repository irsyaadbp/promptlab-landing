import application from "@/constants/application";
import Particle from "@/assets/particles-texture.png";
import GradientLeft from "@/assets/circle-gradient-left.svg";
import GradientRight from "@/assets/circle-gradient-right.svg";

import Spline from "@splinetool/react-spline";

import { motion } from "motion/react";

export default function Hero() {
  function onLoad(e) {
    console.log(e);
  }
  return (
    <section className="relative">
      <img src={GradientLeft} className="absolute left-0" />
      <img src={GradientRight} className="absolute right-0" />
      <img src={Particle} className="mix-blend-overlay absolute inset-0" />
      <div className="container flex flex-col min-h-screen relative items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="gradient-text font-medium md:text-[200px] text-center mt-20">
            {application.name}
          </h2>
        </motion.div>
      </div>
      <div className="h-[220px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Spline
            scene="https://prod.spline.design/7Yvo70AVWpNRc7xj/scene.splinecode"
            onLoad={onLoad}
            className="absolute left-0 right-0 bottom-[-200px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
