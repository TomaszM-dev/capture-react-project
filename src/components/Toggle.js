import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      <div className="faq-line"></div>

      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
