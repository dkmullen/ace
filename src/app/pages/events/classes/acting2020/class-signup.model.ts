export interface Post {
  id: string;
  parent: string;
  email: string;
  phone: string;
  student1: {
    name: string;
    age: number;
  };
  student2: {
    name: string;
    age: number;
  };
  student3: {
    name: string;
    age: number;
  };
  student4: {
    name: string;
    age: number;
  };
}
