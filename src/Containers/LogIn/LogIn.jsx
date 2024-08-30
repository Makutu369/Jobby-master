import NavBar from "../../Components/NavBar/NavBar";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries);
  };
  return (
    <div className=" w-full h-screen">
      <NavBar />
      <div className="flex font-roboto flex-col gap-y-7 w-full">
        <h1 className="mx-auto text-5xl mb-14">Login</h1>
        <form
          method="submit"
          onSubmit={handleSubmit}
          className="border border-black/10 w-[60%] h-[30rem] flex flex-col p-16 rounded-lg shadow  mx-auto gap-y-5"
        >
          <label>
            Username:
            <input
              type="text"
              name="username"
              className="input input-bordered w-full"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-yellow-400 rounded-full p-3 justify-center items-center flex active:bg-yellow-400/40 transition-colors cursor-pointer "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
