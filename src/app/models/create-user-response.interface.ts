import { CreateUserRequest } from "./create-user-request.interface";

export interface CreateUserResponse{
    message: string,
    data : CreateUserRequest
  };