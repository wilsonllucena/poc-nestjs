import { Task } from './../entities/Tasks';

export class CreateTaskDTO extends Task {
  title: string;
  description?: string;
  completed: boolean;
}
