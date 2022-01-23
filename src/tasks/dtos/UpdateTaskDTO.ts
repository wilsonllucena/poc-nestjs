import { Task } from './../entities/Tasks';

export class UpdateTaskDTO extends Task {
  title: string;
  description?: string;
  completed: boolean;
}
