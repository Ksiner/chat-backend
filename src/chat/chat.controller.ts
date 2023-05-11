import { Controller, Get, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import {
  GetAnswerRequestDTO,
  GetAnswerResponseDTO,
} from './dto/get-answer.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/answer')
  @ApiOkResponse({ type: GetAnswerResponseDTO })
  async getAnswer(@Query() query: GetAnswerRequestDTO) {
    const answer = await this.chatService.answerQuestion(query.question);

    return { answer };
  }
}
