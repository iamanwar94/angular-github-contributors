import axios, { AxiosResponse } from "axios";
import { User } from "./types";

const authToken: string | any = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

export const getUsers = async (
  page: number,
  per_page: number
): Promise<User[]> => {
  const url: string =
    "https://api.github.com/repos/angular/angular/contributors";

  const headers = {
    Authorization: `token ${authToken}`,
  };
  const params = {
    page,
    per_page,
  };

  try {
    const usersResp: AxiosResponse<User[]> = await axios.get(url, {
      params,
      headers,
    });
    return usersResp.data;
  } catch (error: any) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserRepos = async (
  username: string | any,
  page: number,
  per_page: number
): Promise<any[]> => {
  const url = `https://api.github.com/users/${username}/repos`;
  const headers = {
    Authorization: `token ${authToken}`,
  };

  const params = {
    page,
    per_page,
  };

  try {
    const reposResp: AxiosResponse<any[]> = await axios.get(url, {
      headers,
      params,
    });
    return reposResp.data;
  } catch (error: any) {
    console.error("Error fetching repos:", error);
    throw error;
  }
};
