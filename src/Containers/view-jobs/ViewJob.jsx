import React from "react";
import { Link, Outlet } from "react-router-dom";

const ViewJob = () => {
  const navItems = [
    { title: "All jobs", href: "" },
    { title: "Accepted Jobs", href: "" },
  ];
  const PostedJobs = [{ name }];
  return (
    <div className="h-screen font-nunito flex text-lg w-full flex-col">
      <div className="h-16 w-full flex bg-zinc-200 justify-between border-black/20 border items-center px-16">
        <div className="flex gap-x-4">
          <div>logo</div>
          <div>welcome message</div>
        </div>

        <Link
          to={"/employer/post-job"}
          className="font-bold border-black p-3 border hover:shadow-[3px_3px_0px_0px_black] transition-shadow"
        >
          + new job
        </Link>
      </div>
      <div className="w-full  flex flex-auto ">
        <div className="h-full w-[25%] border-r flex flex-col  border-black/20">
          {navItems.map((item, key) => (
            <Link
              to={"/employer/view-job/jobs"}
              key={key}
              className=" flex pl-16 cursor-pointer  hover:bg-zinc-200 items-center h-14  border-b border-black/15"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex-auto flex gap-3 flex-wrap p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ViewJob;
