export interface QuestionDTO {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizDTO {
  id: number | string;
  title: string;
  grammar?: string;
  description: string;
  level: string;
  grade: string;
  date: string;
  questions: QuestionDTO[];
  passage?: string;
}

export interface ReadingDTO extends QuizDTO {
  passage: string;
}
