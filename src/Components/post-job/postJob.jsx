import { Input } from "@nextui-org/react";

export default function App() {
  const inputData = [
    {
      type: "text",
      name: "title",
      label: "title",
      placeholder: "enter your the title of the job",
    },
    {
      type: "text",
      name: "description",
      label: "Job Description",
      placeholder: "descrtiption",
    },
    {
      type: "number",
      name: "salary",
      label: "Salary",
      placeholder: "Enter your salary here",
    },
    {
      type: "text",
      name: "location",
      label: "location",
      placeholder: "Enter your location of the job here",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries);
    // You can now save this data to your database or any other way you like.
  };
  return (
    <div className="h-screen font-nunito antialiased text-lg  w-full flex justify-center items-center ">
      <form
        method="submit"
        onSubmit={handleSubmit}
        className="flex w-[60%] gap-y-8 h-[80%] border-lg border-black/10 p-16 border flex-col flex-wrap md:flex-nowrap gap-4"
      >
        <span className="text-xl font-semibold mx-auto">
          Enter Job Description Details
        </span>
        {inputData.map((data, index) => (
          <Input
            type={data.type}
            label={data.label}
            variant="underlined"
            name={data.name}
            placeholder={data.placeholder}
            title={data.title}
            key={index}
          />
        ))}{" "}
        <button
          type="submit"
          className="p-4 w-32 font-bold transition-shadow hover:shadow-[3px_3px_0px_0px_black]  border border-black/50"
        >
          submit
        </button>
      </form>
    </div>
  );
}
