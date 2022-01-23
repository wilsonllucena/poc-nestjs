import {
  Controller,
  Delete,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';

import { UpdateTaskDTO } from './dtos/UpdateTaskDTO';
import { CreateTaskDTO } from './dtos/CreateTaskDTO';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  all() {
    return this.taskService.findAll();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.findById(id);
  }

  @Post()
  create(@Body() createTaskDTO: CreateTaskDTO) {
    return this.taskService.create(createTaskDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDTO: UpdateTaskDTO) {
    return this.taskService.update(id, updateTaskDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.taskService.remove(id);
  }
}
