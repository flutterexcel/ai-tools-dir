'use client';

import FilterPanel from '@/components/FilterPanel';
import SearchBar from '@/components/SearchBar';
import SortingButtons from '@/components/SortingButtons';
import Layout from '@/components/Layout';
import CardList from '@/components/CardList';

const HomePage = () => {

  return (
    <Layout>
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
    </Layout>
  );
};

export default HomePage;
