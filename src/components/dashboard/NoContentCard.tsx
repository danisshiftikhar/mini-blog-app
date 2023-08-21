import React, { FC } from "react";
import Link from "next/link";
import { ROUTES } from "@/constants";

interface NoContentCardProps {
  message: string;
}

const NoContentCard: FC<NoContentCardProps> = ({ message }) => {
  return (
    <div className="flex flex-col gap-2 border-solid border-2 border-blue-500 mx-auto mt-2 p-4 rounded-md w-2/3 md:w-1/4 text-center text-lg shadow-lg">
      <div className=" w-auto">{message}</div>
      <Link
        href={ROUTES.ADD_BLOG}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Blog
      </Link>
    </div>
  );
};

export default NoContentCard;
