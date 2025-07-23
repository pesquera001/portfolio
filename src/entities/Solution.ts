export interface Solution {
  title: string;
  summary: string;
  code: string;
  commentary?: string;
  tags?: string[];
  language: 'python' | 'javascript' | 'typescript' | 'bash' | 'sql' | 'other';
  featured?: boolean;
}
