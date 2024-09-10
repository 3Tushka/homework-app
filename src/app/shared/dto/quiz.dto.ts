export interface QuestionDTO {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizDTO {
  id: number;
  title: string;
  grammar: string;
  description: string;
  level: string;
  grade: string;
  date: string;
  questions: QuestionDTO[];
}
