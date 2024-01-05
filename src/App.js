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

import { ContentfulLivePreview} from '@contentful/live-preview';
import { ContentfulLivePreviewProvider, useContentfulLiveUpdates } from '@contentful/live-preview/react';

ContentfulLivePreview.init({
  locale: 'en-US', // This is required and allows you to set the locale once and have it reused throughout the preview
  enableInspectorMode: true, // This allows you to toggle the inspector mode which is on by default
  enableLiveUpdates: true, // This allows you to toggle the live updates which is on by default
  debugMode: true, // This allows you to toggle the debug mode which is off by default
  targetOrigin: 'https://app.contentful.com', // This allows you to configure the allowed host of the live preview (default: ['https://app.contentful.com', 'https://app.eu.contentful.com'])
});

function Page({ draftMode, entry }) {
  const parseEntry = (entry) => {
    const { items } = entry;
  
    return {
      hero: items[0].fields.sections[0],
      category_banner: items[0].fields.sections[1],
      extended_returns_sub_banner: items[0].fields.sections[2],
      last_chance_carousel: items[0].fields.sections[3],
      tile_array1: items[0].fields.sections[4],
      gift_sets_carousel: items[0].fields.sections[5],
      tile_array2: items[0].fields.sections[6],
      headphones_carousel: items[0].fields.sections[7],
      tile_array3: items[0].fields.sections[8],
      medicine_carousel: items[0].fields.sections[9],
      believe_in_better_sub_banner: items[0].fields.sections[10],
      raising_awareness_sub_banner: items[0].fields.sections[11],
      heaters_carousel: items[0].fields.sections[12]
    };
  };

  const updatedEntry = draftMode ? useContentfulLiveUpdates(entry) : null;

  const data = draftMode ? parseEntry(updatedEntry) : parseEntry(entry);

  return (
    <div className='pt_storefront'>
      <Header />
      <main>
        <div className="html-slot-container">
          <Hero data={data.hero}/>
          <CategoryBanner data={data.category_banner} />
          <SubBanner data={data.extended_returns_sub_banner} />
          <br />
          <Carousel data={data.last_chance_carousel} />
          <TileArray data={data.tile_array1} />
          <Carousel data={data.gift_sets_carousel} />
          <TileArray data={data.tile_array2} />
          <Carousel data={data.headphones_carousel} />
          <TileArray data={data.tile_array3} />
          <Carousel data={data.medicine_carousel} />
          <SubBanner data={data.believe_in_better_sub_banner} />
          <SubBanner data={data.raising_awareness_sub_banner} />
          <Carousel data={data.heaters_carousel} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get('secret');

  const draftMode = secret === process.env.CONTENTFUL_PREVIEW_SECRET;

  const options = draftMode ? 
    {
      host: 'preview.contentful.com',
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN
    }
  :
    {
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    };

  const client = createClient(options);
  
  const fetcher = async () => {
    const entry = await client.getEntries({
      content_type: 'page',
      'sys.id': '4mHy7dxXGJrPquagQz1XXg',
      include: 10
    });

    return entry;
  }

  const { data, error } = useSWR('contentful', fetcher);

  if (error) {
    console.log(error);
    return <div>failed to load </div>;
  }
  if (!data) return <Spinner size="large" />;

  return (
    <ContentfulLivePreviewProvider locale="en-US">
      <Page draftMode={draftMode} entry={data} />
    </ContentfulLivePreviewProvider>
  );
}

export default App