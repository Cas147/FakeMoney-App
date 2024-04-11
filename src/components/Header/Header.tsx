import { FaBell, FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = ({
  name,
  notifications,
}: {
  name: string;
  notifications: number;
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="flex justify-end  w-full items-center text-black py-4 px-12">
      <div className="relative mr-8 text-white">
        <FaBell />
        {notifications > 0 && (
          <span className="bg-red-500 cursor-pointer rounded-full p-1 text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            {notifications}
          </span>
        )}
      </div>
      <Avatar  className="bg-amber-400 cursor-pointer">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
