import moment from "moment";
import { useRouter } from "next/router";
import React from "react";

interface repoProps {
  repo: any;
}

const RepoList: React.FC<repoProps> = ({ repo }) => {
  const router = useRouter();

  return (
    <div
      key={repo.id}
      className="rounded-lg flex justify-center items-center flex-col shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 cursor-pointer transition ease-in-out hover:shadow-lg"
    >
      <div className="flex flex-col py-4 w-full">
        <p className="text-lg mb-4 text-center font-bold capitalize">
          Repo Details
        </p>

        <div className="flex justify-between items-center my-2">
          <p className="capitalize">Repo Name:</p>
          <p className="capitalize">{repo.name}</p>
        </div>
        <div className="flex justify-between">
          <p className="">Forked:</p>
          <p className="">{repo.fork ? "Yes" : "No"}</p>
        </div>
        <div className="flex justify-between">
          <p className="">Stars:</p>
          <p className="">{repo.stargazers_count || "-"}</p>
        </div>
        <div className="flex justify-between">
          <p className="">Last Updated:</p>
          <p className="">{moment(repo.updated_at).format("YYYY-MM-DD")}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoList;
