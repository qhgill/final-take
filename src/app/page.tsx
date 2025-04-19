import Prompt from "../components/Prompt";
import placeholderimg from "@/public/placeholder.png";
import Option from "../utils/options";

const option1: Option = {
  placeholder: "text",
};
const Home = () => {
  return (
    <div className="w-screen max-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <Prompt
          month={1}
          title="title"
          icon={placeholderimg}
          options={option1}
          description="wow I love this project"
          speed={20}
        />
      </div>
    </div>
  );
};

export default Home;
