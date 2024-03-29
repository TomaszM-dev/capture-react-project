import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image, Hide } from "../styles.js";
import styled from "styled-components";
import { scrollReveal } from "../animation";

import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Hide>
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <h2>
            High <span>quality</span> services
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={diaphragm} alt="" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="" />
                <h3>Afforable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="" />
        </Image>
      </Services>
    </Hide>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;

    @media (max-width: 1300px) {
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;

  @media (max-width: 1300px) {
    align-self: center;

    flex-basis: 0rem;
  }
  .icon {
    align-items: center;
    display: flex;
  }
  h3 {
    margin-left: 1rem;
    color: black;
    background: white;
    padding: 1rem 1.5rem;
  }
`;

export default ServicesSection;
