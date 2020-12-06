export interface Post {
  id: string;
  name: string;
  email: string;
  phone: string;
  age?: number;
  grade?: string;
  school?: string;
  city?: string;
  state?: string;
  videolink?: string;
  musical?: boolean;
  monologue?: boolean;
  entryType: string;
  imagePath: string;
}
