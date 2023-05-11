import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { StackoverflowQuestionSearchResponse } from './stackoverflow.types';

@Injectable()
export class StackoverflowApiService {
  private readonly baseAPIURL = 'https://api.stackexchange.com/2.3';

  constructor(private readonly httpService: HttpService) {}

  private composeQuestionsSearchURL() {
    const url = new URL('search/advanced', this.baseAPIURL);
    url.searchParams.append('site', 'stackoverflow');

    return url;
  }

  async getAnswerByQuestion(searchString: string): Promise<string | null> {
    const questionSearchURL = this.composeQuestionsSearchURL();

    questionSearchURL.searchParams.append('order', 'desc');
    questionSearchURL.searchParams.append('sort', 'votes');
    questionSearchURL.searchParams.append('pagesize', '1');
    questionSearchURL.searchParams.append('q', searchString);
    questionSearchURL.searchParams.append(
      'filter',
      '!*SU8CGYZitCB.D*(BDVIficKj7nFMLLDij64nVID)N9aK3GmR9kT4IzT*5iO_1y3iZ)6W.G*',
    );

    const questionsResponse = await firstValueFrom(
      this.httpService.get<StackoverflowQuestionSearchResponse>(
        questionSearchURL.href,
      ),
    );

    if (!questionsResponse.data.items.length) {
      return null;
    }

    const targetQuestion = questionsResponse.data.items[0];

    if (!targetQuestion.answers.length) {
      return null;
    }

    const targetAnswer =
      targetQuestion.answers.find((answer) => answer.is_accepted) ||
      targetQuestion.answers[0];

    return targetAnswer.body;
  }
}
