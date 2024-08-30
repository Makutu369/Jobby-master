import NavBar from "../../Components/NavBar/NavBar";
import hero from "../../assets/hero.svg";
import arrow from "../../assets/arrow_right.svg";
import "./HomePage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="h-screen w-full font-roboto">
      <NavBar />
      <div className="flex px-16 w-full h-full">
        <div className="w-[50%] h-full flex flex-col gap-y-6 items-center py-24">
          <h1 className="text-6xl font-bold">
            Discover Opportunities That Fit Your Ambitions
          </h1>
          <h3 className="text-3xl text-black/70 ">
            here's where your find jobs that fit your expertise
          </h3>
          <Link
            to={"/sign-up"}
            className="group cursor-pointer hover:shadow-[4px_4px_0px_0px_black]  w-36 h-16 transition-all border font-bold flex justify-center bg-yellow-400 items-center self-start"
          >
            <span className="font-bold text-lg mr-3">sign up</span>{" "}
            <img
              className="w-9 h-9 group-hover:translate-x-4 transition"
              src={arrow}
              alt=""
            />
          </Link>
        </div>
        <div className="w-[50%] p-4 overflow-hidden h-full ">
          <img className="" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
