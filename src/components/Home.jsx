import hero from "./image/hero.jpg";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Hi,<a className="text-yellow-500"> Mohammad Rahil</a> here & I'm a
            Planning Engineer
          </h1>
          <p className="text-gray-400 py-5">
            Highly organized and detail-oriented Planning Engineer with over
            3.9years of experience in project planning, scheduling, and
            coordination. Proven ability to develop and implement effective
            project plans ensuring timely and cost-effective completion of
            complex engineering projects. Seeking a challenging position in a
            reputable organization where I can utilize my skills and contribute
            to successful project execution.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineDoubleArrow size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={hero}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
