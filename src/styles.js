// styled components
import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 8rem;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    padding: 2rem 0;
  }
`;

export const Image = styled.div`
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    z-index: 2;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export default { About, Hide, Description, Image };
