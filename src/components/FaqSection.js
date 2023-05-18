import { About, Description, Image, Hide } from "../styles.js";
import styled from "styled-components";
import { useState } from "react";
import Toggle from "./Toggle.js";
import { LayoutGroup } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do i start">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                veniam?
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Different Payement Methods">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                veniam?
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily squadule">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                veniam?
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Why us?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                veniam?
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }

  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }

  .answer {
    p {
      padding: 1.8rem;
    }
  }
`;
export default FaqSection;
