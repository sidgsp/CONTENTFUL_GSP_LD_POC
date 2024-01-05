import React from 'react';
import { useEffect, useState } from 'react';
import { FormControl, TextInput } from '@contentful/f36-components';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  const sdk = useSDK();

  const [units, setUnits] = useState();
  const [sku, setSku] = useState(() => {
    return sdk.field.getValue() ? sdk.field.getValue().sku : ''
  });
  const [originalPrice, setOriginalPrice] = useState(() => {
    return sdk.field.getValue() ? sdk.field.getValue().originalPrice : ''
  });
  const [markdownPrice, setMarkdownPrice] = useState(() => {
    return sdk.field.getValue() ? sdk.field.getValue().markdownPrice : ''
  });
  const [invalidSKU, setInvalidSKU] = useState(false);

  const SKU_LEN = 4

  useEffect(() => {
    sdk.window.startAutoResizer();

    fetch('./prices.json', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }})
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setUnits(data);
    })
    .catch((error) => {
        console.log(error);
    });

    if (units && sku && sku.length === SKU_LEN && units[sku]) {
      sdk.field.setValue(units[sku]);
      sdk.entry.save();

      setOriginalPrice(sdk.field.getValue().originalPrice);
      setMarkdownPrice(sdk.field.getValue().markdownPrice);

      setInvalidSKU(false);
    }
    else if (sku && sku.length === SKU_LEN) {
      setInvalidSKU(false);
    }
    else {
      setInvalidSKU(true);
    }

  }, [sku]);

  return (
      <>
        <FormControl isInvalid={invalidSKU}>
          <FormControl.Label>SKU</FormControl.Label>
            <TextInput value={sku} onChange={(e) => { setSku(e.target.value) }} maxLength={SKU_LEN} />
            { invalidSKU && 
              <FormControl.ValidationMessage>Invalid SKU</FormControl.ValidationMessage>
            }
        </FormControl>
        <FormControl>
            <FormControl.Label>Original Price</FormControl.Label>
            <TextInput value={originalPrice} isDisabled />
        </FormControl>
        <FormControl>
            <FormControl.Label>Markdown Price</FormControl.Label>
            <TextInput value={markdownPrice} isDisabled />
        </FormControl>
      </>
  );
};

export default Field;