import axios from "axios";
import { User } from "../types/user";
import { LoginData } from "../types/loginData";

const BASE_URL = 'http://localhost:3000';

export const getUserByEmail = async(userEmail: string) => {
  return (await axios.get<User>(BASE_URL + `/users?userEmail=${userEmail}`)).data;
};

export const authUser = async(loginData: LoginData) => {
  return (await axios.post<User>(BASE_URL + '/login', loginData)).data;
}

export const createUser = async(newUserData: Omit<User, 'id'>) => {
  const response = await axios.post<User>(BASE_URL + '/users', newUserData);

  return response;

}