import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      `mongodb+srv://admin:${process.env.DATABASE_PASS}@cluster0.p9cvk.mongodb.net/${process.env.DATABASE_NAME}`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
