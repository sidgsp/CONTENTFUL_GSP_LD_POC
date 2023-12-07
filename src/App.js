import Header from './components/header';
import Footer from './components/footer';
import CategoryListHero from './components/categoryListHero';
import MainBanner from './components/mainBanner';

import useSWR from 'swr';

import { Spinner } from '@contentful/f36-spinner';
import { createClient } from 'contentful';

function App() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  });
  
  const fetcher = async () => {
    const entry = await client.getEntry('4mHy7dxXGJrPquagQz1XXg');

    console.log(entry)
  
    const { fields } = entry;
  
    return {
      title: fields.title,
      hero: fields.sections[0].fields,
      categories: fields.sections[1].fields
    }
  }

  const { data, error } = useSWR('contentful', fetcher);

  if (error) {
    console.log(error);
    return <div>failed to load </div>;
  }
  if (!data) return <Spinner size="large" />;

  console.log('app', data);

  return (
    <div className='pt_storefront'>
      <Header />
      <main>
        <div className="html-slot-container">
          <MainBanner client={client} data={data.hero} />
          <CategoryListHero data={data.categories} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
