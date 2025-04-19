import AnimateText from "../components/AnimateText";

import Image from "next/image";
import placeholder from "@/public/placeholder.png";

const Home = () => {
  return (
    <>
      <AnimateText text={"Hello"} typeSpeed={99} />
    </>
  );
};

export default Home;
