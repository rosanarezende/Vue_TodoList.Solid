import axios from "axios";
import { BaseApi } from "@/api/baseApi";
import { InterfaceApi } from "@/types";

export class AxiosApi extends BaseApi implements InterfaceApi {
  // constructor() {
  //   super();
  // }

  async fetch(url: string): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}${url}`);
    return data;
  }
}
