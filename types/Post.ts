import { User } from './User';

export interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    author: { data: User } | number;
  }
}