// pages/[username].js

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUserRepos } from "@/utils/api";
import RepoList from "@/components/RepoList/RepoList";
import Header from "@/components/Header/Header";
import Spinner from "@/components/Spinner/Spinner";

const UserRepos = () => {
  const [repos, setRepos] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      handleFetchRepos();
    }, 500);

    return () => clearTimeout(timer);
  }, [username, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFetchRepos = async () => {
    try {
      const repos = await getUserRepos(username, page, 24);
      console.log("repos resp", repos);
      setLoading(false);
      if (repos && repos.length) {
        repos.sort((a: any, b: any) => {
          const dateA = new Date(a.updated_at as string);
          const dateB = new Date(b.updated_at as string);
          return dateB.getTime() - dateA.getTime();
        });
        setRepos((prevRepos: any) => [...prevRepos, ...repos]);
      }
    } catch (error) {
      console.log("repos fetching error", error);
      setLoading(false);
    }
  };

  if (!username) return <p>Loading...</p>;

  return (
    <main className={`flex min-h-screen flex-col p-4 items-center`}>
      <Header title="User Repos" />
      <div className="flex justify-center items-center gap-4 mt-4 w-100 flex-wrap">
        {repos &&
          repos.map((repo: any) => <RepoList key={repo.id} repo={repo} />)}
      </div>
      <div className="mt-4">{loading && <Spinner />}</div>
    </main>
  );
};

export default UserRepos;
