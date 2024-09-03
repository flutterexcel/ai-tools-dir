'use client';

import FilterPanel from '@/components/FilterPanel';
import SearchBar from '@/components/SearchBar';
import SortingButtons from '@/components/SortingButtons';
import CardList from '@/components/CardList';

const HomePage = () => {
  return (
    <div className="flex">
      <FilterPanel />
      <div className="flex-1 p-4">
        <SearchBar />
        <SortingButtons />
        <div className="grid grid-cols-2 gap-4">
          <CardList bookmark={false} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
