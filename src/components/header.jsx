function Header () {
  return (
    <div className="site-header-band-container">
      <div className="site-header">
        <div className="customer-service-header">
          <div className="html-slot-container">
            <p>
              <span className="header-ticker">
                <a href="https://pharmacy.londondrugs.com/health-clinics/flu-clinic" data-action="Learn More" data-label="SiteHeader:FluShot" data-category="Customer Service Header" className="progfill small-mobile active"><b>Book Your Flu Shot</b></a>
              </span>
              <span className="header-ticker">
                <a href="https://www.londondrugs.com/our-guarantee/OurGuarantee.html" className="progfill" data-action="Learn More" data-label="SiteHeader:Our Guarantee" data-category="Customer Service Header"><b>30-Day Price Match Guarantee</b></a>
              </span>
              <span className="header-ticker">
                <a href="tel:18889912299" className="progfill" data-action="Learn More" data-label="SiteHeader:Customer Service Phone" data-category="Customer Service Header"><b>Customer Service: 1-888-991-2299</b></a>
              </span>
            </p>
          </div>
        </div>

        <nav className="site-header-nav-large">
          <div className="logo">
            <a tabIndex="0" title="Go to Homepage" href="/ldhome/">
              <picture>
                <source media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)" srcSet="https://www.londondrugs.com/on/demandware.static/Sites-LondonDrugs-Site/-/default/dw4155df19/img/logo.png" />
                <img src="https://www.londondrugs.com/on/demandware.static/Sites-LondonDrugs-Site/-/default/dw4155df19/img/logo.png" alt="Homepage" />
              </picture>
            </a>
          </div>
          <div className="sitesearch">
            <form role="search" action="/search/" method="get">
              <label htmlFor="q" id="main-search" />
              <input type="text" name="q" id="main-search" placeholder="Find your product" aria-label="Search" autoComplete="off" />
              <input type="hidden" name="lang" value="default" />
              <button type="submit" value="Go" aria-label="Go Search" />
            </form>
          </div>
          <div className="header-nav-select-your-store">
            <a href="https://www.londondrugs.com/locations/" className="js-storelocation_link header-event-location-icons"><span className="locations-icon">SELECT YOUR STORE</span></a>
          </div>
          <div className="main-options">
            <div className="my-account-option">
              <a href="https://www.londondrugs.com/account/" data-flyout-account=""><span>My Account</span></a>
            </div>
            <div className="minicart">
              <a href="https://www.londondrugs.com/cart/" title="Minicart"><span>0</span></a>
            </div>
          </div>
        </nav>

        <nav className="site-header-secondary-nav-large">
          <ul>
            <li>
              <a data-flyout-categories="" className="header-menu" tabIndex="0" href="https://www.londondrugs.com/on/demandware.store/Sites-LondonDrugs-Site" title="Shop By Category" aria-controls="HeaderSecondaryNav_CategoriesFlyout">
                <span className="menu-icon"> Shop By Category </span>
              </a>
            </li>
            <li>
              <ul className="secondary-links">
                <ul>
                  <li><a href="https://www.londondrugs.com/deals-and-events/" className="header-event-links">Deals &amp; Events</a></li>
                  <li style={{'marginRight':'1.5rem'}}><a style={{'padding': '0 .5rem'}} href="https://www.londondrugs.com/our-services/" className="header-event-links">Services</a></li>
                  <li><a href="https://pharmacy.londondrugs.com/" target="_new" className="header-event-links"><span className="pharmacy-icon">Pharmacy</span> </a></li>
                  <li><a href="http://photolab.londondrugs.com" target="_new" className="header-event-links"><span className="photolab-icon">PhotoLab</span> </a></li>
                  <li><a style={{'padding': '0 .5rem'}} href="http://www.ldextras.com" target="_new" className="header-event-links"><span className="no-icon ldextras"><strong>LD</strong>Extras</span> </a></li>
                  <li style={{'paddingLeft': '1rem'}}><a style={{'paddingRight':0}} href="https://www.londondrugs.com/store-flyers/eflyer.html" className="header-event-icons"><span className="flyers-icon">Flyers</span> </a></li>
                  </ul>
                </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;