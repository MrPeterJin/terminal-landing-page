import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc (Hons) in Optoelectronic Science and Engineering",
    desc: "University of Electronic Science and Technology of China | 2018 ~ 2022",
  },
  {
    title: "Ph.D. in Computer Science and Engineering",
    desc: "The Hong Kong University of Science and Technology | 2022 - Present",
  },
];

export default Education;
