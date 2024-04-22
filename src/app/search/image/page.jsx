import ImageResults from '@/components/search/ImageResults';
import NoResultsMessage from '@/components/search/NoResultsMessage';

export default async function ImageSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&searchType=image`
  );
  if (!response.ok) throw new Error('Algo salió mal...');
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return <NoResultsMessage searchTerm={searchParams.searchTerm} />;
  }
  return <div>{results && <ImageResults results={data} />}</div>;
}
