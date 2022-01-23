import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './entities/Tasks';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async findAll(): Promise<TaskDocument[]> {
    return await this.taskModel.find().exec();
  }

  async create(task: Task): Promise<TaskDocument> {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async findById(id: string): Promise<TaskDocument> {
    return await this.taskModel.findById(id).exec();
  }

  async update(id: string, task: Task): Promise<TaskDocument> {
    return await this.taskModel.findByIdAndUpdate(id, task).exec();
  }

  async remove(id: string): Promise<TaskDocument> {
    return await this.taskModel.findByIdAndRemove(id).exec();
  }
}
