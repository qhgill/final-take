import AnimateText from "../components/AnimateText";
import Question from "../components/Question";

const Home = () => {
  return (
    <>
      <AnimateText text={"Hello"} typeSpeed={99} />
      <Question />
    </>
  );
};

export default Home;
