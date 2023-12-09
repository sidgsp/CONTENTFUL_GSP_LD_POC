function CategoryBanner({ data }) {
  return (
    <div className="desktopLinks">
      <div className="subCatLinks">
        <ul>
          { data.categories.map((category) => (
            <li key={category.sys.id}>
              <a href={category.fields.ctaLink}>{category.fields.ctaLabel}</a>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}

export default CategoryBanner;