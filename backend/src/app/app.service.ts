import { Injectable } from '@nestjs/common';
import {
  Album,
  DataResponse,
  ErrorDataResponse,
  Post,
  Todo,
  User,
} from '../type';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class AppService {
  async getData(id: string): Promise<DataResponse | ErrorDataResponse> {
    try {
      const userData = await fetch(`${BASE_URL}/users/${id}`);
      const user = (await userData.json()) as User;

      const postsData = await fetch(`${BASE_URL}/posts?userId=${user.id}`);
      const posts = (await postsData.json()) as Post[];

      const todosData = await fetch(`${BASE_URL}/todos?userId=${user.id}`);
      const todos = (await todosData.json()) as Todo[];

      const albumsData = await fetch(`${BASE_URL}/albums?userId=${user.id}`);
      const albums = (await albumsData.json()) as Album[];

      return { user, posts, todos, albums };
    } catch (error) {
      return { status: 500, message: 'Error', statusCode: 1000 };
    }
  }
}
