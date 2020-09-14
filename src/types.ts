export interface InterfaceTodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface InterfaceApi {
  fetch(url: string): Promise<any>
}
