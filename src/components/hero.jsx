function Hero({ data }) {
  return (
    <div className="main-banner">
      <div className="mkt-hero">
        <div className="mkt-left">
          <a href={data.columns[0].fields.ctaLink} data-category="HmHero" data-action="Shop Now" data-label="Banner:Hero1:Appliance Savings Event" className="product-banner">
            <picture>
              <img alt="Appliance Savings Event" src={data.columns[0].fields.image.fields.file.url} />
            </picture>
          </a>
          <div className="mkt-cta-btn-wrapper-abs">
				    <a className="mkt-cta-btn product-banner" href={data.columns[0].fields.ctaLink} data-category="HmHero" data-action="Shop Now" data-label="Banner:Hero1: Appliance Savings Event">{data.columns[0].fields.ctaLabel}</a>
			    </div>
        </div>
        <div className="mkt-right">
          <a href={data.columns[1].fields.ctaLink} data-category="HmHero" data-action="Learn More" data-label="Banner:Hero2: Stocking Stuffers" className="product-banner">
            <picture>
              <img alt="Stocking Stuffers for Seniors" src={data.columns[1].fields.image.fields.file.url} />
            </picture>
          </a>
          <div className="mkt-cta-btn-wrapper-abs">
            <a className="mkt-cta-btn" href={data.columns[1].fields.ctaLink} data-category="HmHero" data-action="Shop Now" data-label="Banner:Hero2: Stocking Stuffer">{data.columns[1].fields.ctaLabel}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;