import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StackoverflowApiService } from './stackoverflow.service';

@Module({
  imports: [HttpModule.register({})],
  providers: [StackoverflowApiService],
  exports: [StackoverflowApiService],
})
export class StackOverflowModule {}
