import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Peter Gam</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Ph.D. Student</HighlightAlt> studying in The Hong Kong University of Science and Technology. My research interest is medical image analysis.
      </p>
      <p>
        Apart from the research, I am passionate about writing codes and implementing my ideas to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
