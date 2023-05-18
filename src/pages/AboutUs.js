//page component
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <FaqSection></FaqSection>
      <ScrollTop></ScrollTop>
    </motion.div>
  );
};

export default AboutUs;
