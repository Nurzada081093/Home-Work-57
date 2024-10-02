export interface IUser {
  id: string;
  name: string;
  email: string;
  position: string;
  active: boolean;
  imageUrl?: string | null;
}
