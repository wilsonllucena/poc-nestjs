import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      `mongodb+srv://admin:gTJ2UVEzHSVOOn6o@cluster0.p9cvk.mongodb.net/poc_nestjs`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
