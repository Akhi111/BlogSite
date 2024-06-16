import CallToAction from "../components/CallToAction";

const Projects = () => {
  return (
    <div className=" min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center gap-6 p-3">
      <h1 className=" text-3xl font-semibold">Projects</h1>
      <p className=" text-md text-gray-500">
        Build projects using CSS, HTML, JavaScript, Reactjs , Nodejs and MongoDB
        as database.
      </p>

      <CallToAction />
    </div>
  );
};

export default Projects;
