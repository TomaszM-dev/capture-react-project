import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles.js";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} c z>
              true.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography idead that you have. We
          have proffesionals.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
