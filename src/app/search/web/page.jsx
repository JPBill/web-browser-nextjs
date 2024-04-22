import NoResultsMessage from '@/components/search/NoResultsMessage';

export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}`
  );
  if (!response.ok) throw new Error('Algo salió mal...');
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return <NoResultsMessage searchTerm={searchParams.searchTerm} />;
  }
  return <div>WebSearchPage</div>;
}
