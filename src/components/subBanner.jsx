import { useContentfulInspectorMode } from '@contentful/live-preview/react';

function SubBanner({ data }) {
  const entry_id = data.sys.id;
  data = data.fields;

  const inspectorProps = useContentfulInspectorMode({ entryId: entry_id });

 return (
    <div className="sub-banner" {...inspectorProps({ fieldId: 'sections' })}>
      <a className="product-banner" href={data.ctaLink} data-category="hero banner 3" data-action="Learn More" data-label="Extended Returns">
        <picture>
          {/* <source media="(min-width: 56.250em)" srcSet="https://www.londondrugs.com/on/demandware.static/-/Sites/default/dwf14e99c3/images/slot/sub_banners/ExtendedReturns2023_Holiday_PDP1232x80.png" />
          <source media="(min-width: 25em)" srcSet="https://www.londondrugs.com/on/demandware.static/-/Sites/default/dwe96a2993/images/slot/sub_banners/ExtendedReturns2023_Holiday_PDP_700x80.png" /> */}
          <img alt="Extended Returns" src={data.image.fields.file.url} /> 
        </picture>
      </a>
    </div>
  );
}

export default SubBanner;