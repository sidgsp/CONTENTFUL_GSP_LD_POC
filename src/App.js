import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import CategoryBanner from './components/categoryBanner';
import SubBanner from './components/subBanner';
import Carousel from './components/carousel';
import TileArray from './components/tileArray';

import useSWR from 'swr';

import { Spinner } from '@contentful/f36-spinner';
import { createClient } from 'contentful';

function App() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  });
  
  const fetcher = async () => {
    const entry = await client.getEntries({
      content_type: 'page',
      'sys.id': '4mHy7dxXGJrPquagQz1XXg',
      include: 10
    });

    // console.log(entry)
  
    const { items } = entry;
  
    return {
      title: items[0].fields.title,
      hero: items[0].fields.sections[0].fields,
      category_banner: items[0].fields.sections[1].fields,
      extended_returns_sub_banner: items[0].fields.sections[2].fields,
      believe_in_better_sub_banner: items[0].fields.sections[3].fields,
      raising_awareness_sub_banner: items[0].fields.sections[4].fields
    };
  }

  const { data, error } = useSWR('contentful', fetcher);

  if (error) {
    console.log(error);
    return <div>failed to load </div>;
  }
  if (!data) return <Spinner size="large" />;

  return (
    <div className='pt_storefront'>
      <Header />
      <main>
        <div className="html-slot-container">
          <Hero data={data.hero} />
          <CategoryBanner data={data.category_banner} />
          <SubBanner data={data.extended_returns_sub_banner} />
          <br />
          <Carousel />
          <TileArray />
          <Carousel />
          <TileArray />
          <Carousel />
          <TileArray />
          <Carousel />
          <SubBanner data={data.believe_in_better_sub_banner} />
          <SubBanner data={data.raising_awareness_sub_banner} />
          <Carousel />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
