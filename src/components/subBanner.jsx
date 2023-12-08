function SubBanner({ data }) {
  return (
    <div className="sub-banner">
      <a className="product-banner" href={data.link} data-category="hero banner 3" data-action="Learn More" data-label="Extended Returns">
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