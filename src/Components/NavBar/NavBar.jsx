import Navlist from "./navlist";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full font-roboto text-lg px-16 flex justify-between h-14 items-center border-b border-black/15">
      <Link to={"/"} className="gap-x-6 flex items-center">
        <img className="w-14 h-11" src={logo} alt="" />
        <div className="font-bold">Jobby</div>
      </Link>
      <Navlist
        data={[
          { title: "Post Job", href: "/post-job" },
          { title: "Company Review", href: "/company-review" },
          { title: "About Us", href: "/about" },
        ]}
      />
      <Link
        to={"/login"}
        className=" hover:shadow-[3px_3px_0px_0px_black] transition-shadow  justify-center   w-32 border-black/70 p-2 border flex justify-items-center items-center"
      >
        sign in
      </Link>
    </div>
  );
};

export default NavBar;
