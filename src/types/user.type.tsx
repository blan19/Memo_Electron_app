interface IUser {
  isLogin: boolean;
  user: IStrapiUser;
}
interface IStrapiUser {
  id: number;
  email: string;
  username: string;
}
export { IStrapiUser, IUser };
