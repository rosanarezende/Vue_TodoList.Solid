import { BaseApi } from "@/api/baseApi";
import { AxiosApi } from "@/api/axiosApi";
import { InterfaceApi } from "@/types";

export class Api extends BaseApi implements InterfaceApi {
  private provider: any = new AxiosApi();

  async fetch(url: string): Promise<any> {
    return await this.provider.fetch(url);
  }
}
