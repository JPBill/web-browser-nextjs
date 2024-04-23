import NoResultsMessage from '@/components/search/NoResultsMessage';
import WebResults from '@/components/search/WebResults';

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || '1';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&start=${startIndex}`
  );
  if (!response.ok) throw new Error('Algo salió mal...');
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return <NoResultsMessage searchTerm={searchParams.searchTerm} />;
  }
  return <div>{results && <WebResults results={data} />}</div>;
}
