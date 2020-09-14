import { InterfaceApi } from "@/types";

export class BaseApi implements InterfaceApi {
  protected baseUrl = "https://jsonplaceholder.typicode.com/";

  async fetch(url: string): Promise<any> {
    // const response = await fetch(`${this.baseUrl}${url}`);
    // return await response.json();
  }
}
