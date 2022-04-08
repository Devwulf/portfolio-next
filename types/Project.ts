import { Media } from './Media';

export interface Project {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Link: string;
    Image?: { data: Media };
    Icon: { data: Media };
  }
}