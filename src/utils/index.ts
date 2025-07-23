export function createPageUrl(page: string): string {
  switch (page.toLowerCase()) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'solutions':
      return '/solutions';
    case 'theses':
      return '/theses';
    case 'editorial':
      return '/editorial';
    case 'article':
      return '/article';
    default:
      return '/';
  }
}
