export interface DataResponse {
  user: User;
  albums: Album[];
  todos: Todo[];
  posts: Post[];
}

export interface ErrorDataResponse {
  statusCode: number;
  status: number;
  message: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
