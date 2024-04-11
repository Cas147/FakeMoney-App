import { FaBorderAll, FaRegClock } from "react-icons/fa6";

import Title from "@/components/Title/Title";
import RecentPosts from "./components/RecentPosts";

import slider2 from "../../assets/images/slider2.jpeg";
import PopularPosts from "./components/PopularPosts";

const Page = (): JSX.Element => {
  return (
    <div className="px-0 py-2">
      <Title text="Blog" />

      <div className="flex justify-center">
        <div className="w-10/12 lg:w-8/12">
          <RecentPosts />
          <div className="col-span-12 md:col-span-8">
            <PopularPosts />
          </div>
          <div className="col-span-4 md:col-span-4">
            <p className="text-white">hi</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
