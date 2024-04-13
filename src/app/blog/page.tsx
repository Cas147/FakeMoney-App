import { FaBorderAll, FaRegClock } from "react-icons/fa6";

import Title from "@/components/Title/Title";
import RecentPosts from "./components/RecentPosts";

import slider2 from "../../assets/images/slider2.jpeg";
import PopularPosts from "./components/PopularPosts";
import EconomicCalendarSummary from "./components/EconomicCalendarSummary";
import MostActives from "./components/MostActives";
import { activesMock } from "../markets/__Mocks__/LosersMock copy";
import { activesMock5 } from "../markets/__Mocks__/ActiveMock";

const Page = (): JSX.Element => {
  return (
    <div className="px-0 py-2 w-full flex justify-center">
      <div className=" md:w-10/12">
        <Title text="Blog" />

        <div className="flex justify-center">
          <div className="">
            <RecentPosts />

            <div className="col-span-12 md:col-span-8 mt-12">
              <div className="w-full grid grid-cols-12">
                <div className="col-span-12 md:col-span-8">
                  <PopularPosts />
                </div>
                <div className="col-span-12 md:col-span-4 pl-8">
                  <MostActives data={activesMock5} />
                  <EconomicCalendarSummary />
                </div>
              </div>
            </div>

            <div className="col-span-4 md:col-span-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
