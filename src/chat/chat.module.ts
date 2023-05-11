import { Module } from '@nestjs/common';
import { StackOverflowModule } from 'src/stackoverflow/stackoverflow.module';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports: [StackOverflowModule],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
