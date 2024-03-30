import { UserType } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface UserProps {
  user: UserType;
}

const User: React.FC<UserProps> = ({ user }) => {
  const router = useRouter();

  return (
    <div
      key={user.id}
      className="rounded-lg flex justify-center items-center flex-col shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 cursor-pointer transition ease-in-out hover:shadow-lg"
    >
      <div className="w-full h-auto aspect-square">
        <Image
          src={user.avatar_url}
          alt={user.login}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg"
          width={200}
          height={100}
        />
      </div>
      <div className="flex flex-col py-4 w-full">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-bold capitalize">
            @ {user.login.slice(0, 10)}
          </p>
          <div className="flex justify-between buttons">
            <button className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </button>
            <button
              onClick={() => router.push(`/users/${user.login}`)}
              className="flex items-center px-4 py-2 ml-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              View Repo
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="">Commits:</p>
          <p className="">{user.contributions}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
