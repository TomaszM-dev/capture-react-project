import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Send us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Send Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 3rem;
  background: white;
  padding: 1rem;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    font-weight: lighter;

    margin: 2rem;
  }
`;
export default ContactUs;
