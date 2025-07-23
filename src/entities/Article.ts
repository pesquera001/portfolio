export interface Article {
  title: string;
  subtitle?: string;
  cover_image?: string;
  content: string;
  excerpt?: string;
  category: 'finance' | 'defense' | 'technology' | 'analysis';
  reading_time: number;
  featured?: boolean;
  published?: boolean;
}
