import { useContentfulInspectorMode } from '@contentful/live-preview/react';

function CategoryBanner({ data }) {
  const entry_id = data.sys.id;
  data = data.fields;

  const inspectorProps = useContentfulInspectorMode({ entryId: entry_id });

  return (
    <div className="desktopLinks" {...inspectorProps({ fieldId: 'sections' })}>
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