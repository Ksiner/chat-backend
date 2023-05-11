export type StackoverflowUser = {
  account_id: number;
  reputation: number;
  user_id: number;
  user_type: string;
  accept_rate: number;
  profile_image: string;
  display_name: string;
  link: string;
};

export type StackoverflowQuestionSearchResponse = {
  items: Array<{
    tags: string[];
    owner: StackoverflowUser;
    is_answered: boolean;
    view_count: number;
    accepted_answer_id: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date: number;
    question_id: number;
    content_license: string;
    link: string;
    title: string;
    answers: Array<{
      owner: StackoverflowUser;
      is_accepted: boolean;
      score: number;
      last_activity_date: number;
      last_edit_date: number;
      creation_date: number;
      answer_id: number;
      question_id: number;
      content_license: 'CC BY-SA 4.0';
      body: string;
    }>;
  }>;
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
};
