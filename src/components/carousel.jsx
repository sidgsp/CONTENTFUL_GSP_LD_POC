import { useContentfulInspectorMode } from '@contentful/live-preview/react';

function Slide({ data }) {
  console.log(data)

  return (
    <div className="slick-slide">
      <a href={data.link} className="product-image-link">
        <img className="product-image" data-src="https://www.londondrugs.com/dw/image/v2/AAJI_PRD/on/demandware.static/-/Sites-londondrugs-master/default/dwd76b6c71/products/L1226369/large/L1226369.JPG?sw=270&amp;sh=330&amp;sm=fit" src={data.image.fields.file.url} alt="Martex Dish Cloth Set - 2pk - Assorted" data-loaded="true" />
      </a>
      <div className="product-details">
        <a href={data.link}>
          <p className="brand">MARTEX</p>
          <h3 className="ld-sg-heading-slide">{data.label}</h3>
          <ul className="product-slide-pricing">
            { data.unit.markdownPrice
              ? <>
                  <li className="markdown-price"><p>{data.unit.markdownPrice}</p></li>
                  <li className="original-price"><p>{data.unit.originalPrice}</p></li>
                </>
              
              : <li className="price"><p>{data.unit.originalPrice}</p></li>
            }
          </ul>
        </a>
        <a href="" className="ld-sd-tooltip" data-tooltip="<div class=&quot;product-grid-callout-msg&quot;><p><strong>Deal of the Week: </strong>Buy one, get one FREE <a href=&quot;https://www.londondrugs.com/search/?q=11176&quot; target=&quot;_blank&quot;>Blistex Lip Balm</a></p></div>">
          View Special Offers
        </a>
      </div>
    </div>
  );
}

function Carousel({ data }) {
  const entry_id = data.sys.id;
  data = data.fields;

  const inspectorProps = useContentfulInspectorMode({ entryId: entry_id });

  return (
    <div className="banner-carousel-wrapper" {...inspectorProps({ fieldId: 'sections' })}>
      <h2 className="ld-sg-heading-carousel">
        <a href="https://www.londondrugs.com/clearance/" style={{'fontSize':'100%'}} title="See all Last Chance">{data.label}</a>
      </h2>
      <div className="banner-carousel-body">
        <div className="slick-slider-wrapper">
          <div className="slick-slider">
            <button type="button" data-role="none" className="slick-prev" aria-label="Previous" role="button">Previous</button>
              <div className="slick-list">
                <div className="slick-track">
                  { data.slides.map((slide) => (
                    <Slide key={slide.sys.id} data={slide.fields} />
                  )) }
                </div>
              </div>
            <button type="button" data-role="none" className="slick-next" aria-label="Previous" role="button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;