const Jobs = () => {
  const jobPosts = [
    {
      title: "Frontend Developer",
      description:
        "Responsible for implementing visual elements that users see and interact with in a web application. Requires strong skills in HTML, CSS, and JavaScript frameworks like React.",
      salary: "$70,000 - $90,000 per year",
      location: "New York, NY",
    },
    {
      title: "Backend Developer",
      description:
        "Develop and maintain server-side logic, ensuring high performance and responsiveness to requests from the front-end. Proficiency in Node.js, Express, and database management is required.",
      salary: "$80,000 - $100,000 per year",
      location: "San Francisco, CA",
    },
    {
      title: "UI/UX Designer",
      description:
        "Design user interfaces and create engaging user experiences with a focus on user-centered design principles. Must be proficient in Figma, Sketch, and Adobe Creative Suite.",
      salary: "$60,000 - $80,000 per year",
      location: "Remote",
    },
    {
      title: "Data Analyst",
      description:
        "Analyze data trends and provide actionable insights to help businesses make informed decisions. Requires strong skills in SQL, Python, and data visualization tools like Tableau.",
      salary: "$65,000 - $85,000 per year",
      location: "Austin, TX",
    },
    {
      title: "Marketing Specialist",
      description:
        "Develop and execute marketing strategies to promote products and services. Experience with digital marketing, content creation, and SEO is essential.",
      salary: "$50,000 - $70,000 per year",
      location: "Chicago, IL",
    },
    {
      title: "Product Manager",
      description:
        "Oversee the development and launch of products, coordinating between engineering, design, and marketing teams. Must have excellent project management and communication skills.",
      salary: "$90,000 - $120,000 per year",
      location: "Seattle, WA",
    },
    {
      title: "Sales Representative",
      description:
        "Engage with potential clients to promote and sell company products. Requires excellent communication and negotiation skills with a proven track record in sales.",
      salary: "$45,000 - $60,000 per year plus commission",
      location: "Los Angeles, CA",
    },
    {
      title: "DevOps Engineer",
      description:
        "Implement and manage CI/CD pipelines, ensure infrastructure is scalable, and automate processes to enhance development efficiency. Familiarity with Docker, Kubernetes, and AWS is required.",
      salary: "$85,000 - $110,000 per year",
      location: "Remote",
    },
    {
      title: "Customer Support Specialist",
      description:
        "Provide assistance to customers by resolving inquiries and issues efficiently. Excellent problem-solving and communication skills are a must.",
      salary: "$40,000 - $55,000 per year",
      location: "Orlando, FL",
    },
    {
      title: "HR Manager",
      description:
        "Manage recruitment, employee relations, and compliance with company policies. Strong interpersonal and organizational skills are essential.",
      salary: "$75,000 - $95,000 per year",
      location: "Boston, MA",
    },
  ];

  console.log(jobPosts);
  return (
    <>
      {jobPosts.map((post, key) => (
        <div
          key={key}
          className="border cursor-pointer w-60 h-36 transition-shadow border-black/20 hover:shadow-[4px_4px_0px_0px_black] flex flex-col"
        >
          <div className="border-b border-black/10 px-2  font-bold uppercase">
            {post.title}
          </div>
          <div className=" h-[60%] truncate flex-wrap px-2">
            {post.description}
          </div>
          <h3 className=" font-normal text-sm px-2">{post.salary}</h3>
        </div>
      ))}
    </>
  );
};

export default Jobs;
