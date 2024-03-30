import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import Users from "../Users/Users";
import { getUsers } from "@/utils/api";
import { useRouter } from "next/router";

const Contributors = () => {
  const [users, setusers] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [noRecords, setNoRecords] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      handleFetchUsers();
    }, 500);

    return () => clearTimeout(timer);
  }, [page]);

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

  const handleFetchUsers = async () => {
    setLoading(true);
    try {
      const usersResp = await getUsers(page, 24);
      console.log("usersResp", usersResp);
      if (usersResp && usersResp.length) {
        const sortedResp = usersResp.sort(
          (a: any, b: any) => b.contributions - a.contributions
        );
        setusers((prevUsers: any) => [...prevUsers, ...sortedResp]);
      } else {
        setNoRecords(true);
      }
    } catch (error) {
      console.error("error while fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-4 w-100 flex-wrap">
        {users?.map((user: any) => (
          <Users user={user} key={user.id} />
        ))}
      </div>
      <div className="mt-10">
        {loading && !noRecords ? (
          <Spinner />
        ) : !users.length ? (
          <h4>No Users Found</h4>
        ) : (
          <h4>No More Users</h4>
        )}
      </div>
    </div>
  );
};

export default Contributors;
