import { Injectable } from '@nestjs/common';
import { StackoverflowApiService } from 'src/stackoverflow/stackoverflow.service';

@Injectable()
export class ChatService {
  constructor(
    private readonly stackoverflowApiService: StackoverflowApiService,
  ) {}

  answerQuestion(question: string) {
    return this.stackoverflowApiService.getAnswerByQuestion(question);
  }
}
