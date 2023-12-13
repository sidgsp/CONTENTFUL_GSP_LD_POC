import { useContentfulInspectorMode } from '@contentful/live-preview/react';

function Tile({ data }) {
  return (
    <div className="content-item">
      <div className="tile">
        <div className="tile-body">
          <a style={{'pointerEvents': 'none'}} href={data.ctaLink} data-category="home-banner-3" data-action="Shop Now" data-label="banner:tiles:Dec08-2023-HEA-PhilipsToothbrush">
            <picture className="main-img">
              {/* <source srcSet={data.image.fields.file.url} /> */}
              <img data-img-name="L1623781" data-object-fit="contain" loading="lazy" decoding="async" src={data.image.fields.file.url} alt="Philips Sonicare Protective Clean 6300 Rechargeable Electric Toothbrush" />
            </picture>
          </a>

          { data.logo &&
            <div className="logo-img-wrapper">
              <picture className="logo-img">
                {/* <source srcSet="https://cdn.media.amplience.net/i/londondrugs/Philips_black.webp?ld=687&amp;w=600" /> */}
                <img data-img-name="Philips_black"  data-object-fit="contain" loading="lazy" decoding="async" src={data.logo.fields.file.url} />
              </picture>
            </div>
          }

          <div className="tile-cta-wrapper">
            <div className="secondary-amount">
              {/* filler */}
            </div>
            { data.ctaBlueLabel && 
              <div className="cta">{data.ctaBlueLabel}</div>
            }
            { data.ctaRedLabel &&
              <div className="primary-amount">
                <div className="save-tag">
                  <p>{data.ctaRedLabel}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <div className="tile-footer">
          <h2 className="txt-heading">{data.footer}</h2>
        </div>
      </div>
    </div>
  );
}

function TileArray({ data }) {
  const entry_id = data.sys.id;
  data = data.fields;

  const inspectorProps = useContentfulInspectorMode({ entryId: entry_id });
  
  return (
    <div className="html-slot-container" {...inspectorProps({ fieldId: 'sections' })}>
      <section className="content-container-wrapper">
        <div className="content-container">
          { data.tiles.map((tile) => (
            <Tile key={tile.sys.id} data={tile.fields} />
          )) }
        </div>
      </section>
    </div>
  );
}

export default TileArray;