function CategoryListHero({ data }) {
  console.log('cat', data);
  return (
    <div className="desktopLinks">
      <div className="subCatLinks">
        {/* <ul>
          { data.categories.map((category) => (
            <li key={category.fields.title}>
              <a href={category.fields.link}>{category.fields.label}</a>
            </li>
          )) }
        </ul> */}
      </div>
    </div>
  );
}

export default CategoryListHero;