import Image from "next/image";
import placeholder from "@/public/placeholder.png"

const Home = () => {
  return <>
    <Image 
    src={placeholder}
    width={500}
    height={500}
    alt="quin"
    />
  
  </>;
};

export default Home;
