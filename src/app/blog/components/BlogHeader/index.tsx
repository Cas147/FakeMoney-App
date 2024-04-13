import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IBlogHeader } from "../../interfaces/blog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BiHeart } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { BiBookmarkPlus } from "react-icons/bi";
import { BiPlayCircle } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiCopy } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { copyToClipboard } from "@/app/helpers/copyToClipboard";
import { PostComment } from "../../interfaces/blog";
import PostComments from "../Comments";

const comments: PostComment[] = [
  {
    id: 1,
    user: "@user1",
    date: "3 days ago",
    content:
      "This is the first comment by user1. It's great to see the new changes!",
  },
  {
    id: 2,
    user: "@user2",
    date: "1 week ago",
    content:
      "User2 here! Loving the design improvements. Keep up the good work!",
  },
  {
    id: 3,
    user: "@user3",
    date: "2 weeks ago",
    content:
      "User3 chiming in! The new features are fantastic. Can't wait to see more updates.",
  },
  {
    id: 4,
    user: "@user4",
    date: "3 weeks ago",
    content:
      "User4 dropping by! The user experience has improved a lot. Kudos to the team!",
  },
  {
    id: 5,
    user: "@user5",
    date: "1 month ago",
    content:
      "User5 here! The platform is looking better than ever. Excited for what's next!",
  },
];

const BlogHeader = ({ content }: { content: IBlogHeader }): JSX.Element => {
  return (
    <div className="mb-8">
      <p className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
        {content.title}
      </p>
      <div className="flex my-8 items-center">
        <Avatar className="h-10 w-10 border border-amber-400 mr-4">
          <AvatarImage
            className="h-10 w-10"
            src="https://fakemoney.co/wp-content/uploads/2023/03/Fake-New-Logo2.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-white">{content.author}</p>
          <p className="text-sm text-gray-400">
            {content.time} - {content.date}
          </p>
        </div>
      </div>
      <TooltipProvider>
        <div className="flex border border-y border-x-0 py-4 px-2 border-gray-200 justify-between">
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <BiHeart className="text-white hover:text-red-400 cursor-pointer text-2xl" />
                  <p className="text-sm ml-2 text-gray-400">{content.likes}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-700 text-white">
                <p>Likes</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Sheet>
                  <SheetTrigger asChild>
                    <div className="flex items-center ml-4">
                      <BiChat className="text-white hover:text-amber-400 cursor-pointer text-2xl" />
                      <p className="text-sm ml-2 text-gray-400">
                        {content.likes}
                      </p>
                    </div>
                  </SheetTrigger>
                  <SheetContent className="bg-zinc-900">
                    <PostComments comments={comments} />
                  </SheetContent>
                </Sheet>
              </TooltipTrigger>

              <TooltipContent className="bg-zinc-700 text-white">
                <p>Comentarios</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <BiBookmarkPlus className="text-white hover:text-amber-400 cursor-pointer text-2xl" />
                  <p className="text-sm ml-2 text-gray-400">{content.likes}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-700 text-white">
                <p>Guardar</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center ml-4">
                  <BiPlayCircle className="text-white hover:text-amber-400 cursor-pointer text-2xl" />
                  <p className="text-sm ml-2 text-gray-400">{content.likes}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-700 text-white">
                <p>Reproducir</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center ml-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex items-center">
                        <BiShareAlt className="text-white hover:text-amber-400 cursor-pointer text-2xl" />
                        <p className="text-sm ml-2 text-gray-400">
                          {content.likes}
                        </p>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-zinc-500">
                      <DropdownMenuLabel
                        onClick={() => copyToClipboard(window.location.href)}
                        className="text-white flex items-center hover:text-amber-400 cursor-pointer"
                      >
                        <BiCopy /> <p className="ml-2">Copiar Link</p>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-zinc-800" />
                      <DropdownMenuItem className="text-white flex items-center hover:text-amber-400 cursor-pointer">
                        <BiLogoTwitter />{" "}
                        <p className="ml-2">Compartir en Twitter</p>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-white flex items-center hover:text-amber-400 cursor-pointer">
                        <BiLogoFacebookCircle />{" "}
                        <p className="ml-2">Compartir en Facebook</p>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-white flex items-center hover:text-amber-400 cursor-pointer">
                        <BiLogoWhatsapp />{" "}
                        <p className="ml-2">Copiar en WhatsApp</p>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-700 text-white">
                <p>Compartir</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
};
export default BlogHeader;
