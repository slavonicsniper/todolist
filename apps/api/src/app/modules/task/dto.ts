export interface CreateTaskDto {
  text: string;
  isCompleted?: boolean;
}

export interface UpdateTaskDto {
  text: string;
  isCompleted: boolean;
  user: string;
  uuid: string;
}
