export interface TimelineEvent {
  id: number;
  date: Date;
  title: string;
  description: string;
  source?: string;
}