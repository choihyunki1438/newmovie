import { Suspense, useState, useDeferredValue } from 'react';
import MovieCard from './MovieCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <>
      <label>
        
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div style={{ opacity: isStale ? 0.5 : 1 }}>
          <MovieCard query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
}
