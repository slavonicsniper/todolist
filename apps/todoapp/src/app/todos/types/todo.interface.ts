export interface TodoResponse {
  uuid: string;
  text: string;
  isCompleted: boolean;
  user: string;
}

export interface TodoRequest {
  text: string;
  isCompleted: boolean;
}
