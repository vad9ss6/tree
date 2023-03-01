import { TreeDTO } from "../../../../shared";
import {
  CREATE_USERS_PATH,
  DELETE_USERS_PATH,
  GET_USERS_PATH,
  UPDATE_USERS_PATH,
} from "../../endpoints";
import request from "../../request";

export default class UserService {
  static getCollection = (treeName: string) => {
    return request<TreeDTO>({
      url: `${GET_USERS_PATH}`,
      params: { treeName },
      method: "post",
    });
  };

  static create = (params: {
    treeName: string;
    parentNodeId: number;
    nodeName: string;
  }) => {
    return request<TreeDTO>({
      url: `${CREATE_USERS_PATH}`,
      method: "post",
      params,
    });
  };

  static delete = (params: { treeName: string; nodeId: number }) => {
    return request({
      url: `${DELETE_USERS_PATH}`,
      method: "post",
      params,
    });
  };

  static update = (params: { treeName: string; nodeId: number }) => {
    return request({
      url: `${UPDATE_USERS_PATH}`,
      method: "post",
      params,
    });
  };
}
