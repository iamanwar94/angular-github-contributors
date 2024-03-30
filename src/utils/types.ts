export interface User {
  login: string;
  id: number;
  avatar_url: string;
}

export interface UserType {
  id: string | number;
  contributions: string;
  login: string;
  avatar_url: string;
  html_url: string;
  url: string; // Assuming this is the correct type based on your use of `getUserByUsername(user.url)`
}
