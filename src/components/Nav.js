import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/aboutus"> About Us</Link>
          <Line
            transition={{ duration: 0.35 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/aboutus" ? "50%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.35 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
          <Line
            transition={{ duration: 0.35 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contactus" ? "50%" : "0%" }}
          ></Line>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: sticky;
  top: 0;
  background: #414141;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  z-index: 10;
  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 7rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    padding: 0.1rem;
    flex-direction: column;

    ul {
      padding: 2rem 0rem;
      justify-content: space-around;

      width: 100%;
    }

    li {
      padding: 0;
    }

    h1 {
      padding: 1rem 0;
      font-size: 2.4rem;
    }
  }

  h1 {
    font-weight: lighter;
    font-style: italic;
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -30%;
  left: 52%;

  @media (max-width: 1300px) {
    left: 0;
  }
`;

export default Nav;
