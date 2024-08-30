import { Link } from "react-router-dom";
const Navlist = ({ data }) => {
  return (
    <div className="flex gap-x-4">
      {data.map((item, index) => (
        <Link to={item.href} className="font-bold text-black/70" key={index}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
export default Navlist;
