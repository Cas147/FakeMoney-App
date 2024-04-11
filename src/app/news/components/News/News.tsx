"use client";
import Link from "next/link";
import moment from "moment";

import { FORMATT_DATE } from "@/constants/formatDate";
import { NewsArticle } from "@/app/news/interfaces/news";
import NewContentDialog from "../NewContentDialog";

const News = ({ news }: { news: NewsArticle[] }): JSX.Element => {
  return (
    <div className="m-2 flex flex-col items-center">
      {(news || []).map((item, index) => (
        <div
          key={index}
          className="p-2 shadow-sm shadow-slate-500 rounded-xl my-2 w-full overflow-hidden"
        >
          <div className="flex">
            <img
              alt="Thumbnail"
              className="w-8 md:w-32 h-8 md:h-32 mr-6 rounded-md"
              src={item?.image}
            />
            <div>
              <h3 className="font-semibold text-white line-clamp-2">
                {item?.title}
              </h3>
              <div className="font-extralight">
                {moment(item?.date).format(FORMATT_DATE.News_Format)}
              </div>
              <p className="mt-2 text-white text-sm font-extralight">
                {item?.site}
              </p>
            </div>
          </div>
          <div className="flex justify-end my-2">
            <NewContentDialog content={item.content} title={item.title}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
