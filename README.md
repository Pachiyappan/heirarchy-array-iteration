# heirarchy-array-iteration


```
import {isEmpty} from 'lodash';

const flattenNestedArray = (arr, keyIdentifier) => {
  let flatArray = [];
  arr.forEach(element => {
    if (!isEmpty(element[keyIdentifier])) {
      flatArray = [
        ...flatArray,
        ...flattenNestedArray(element[keyIdentifier], keyIdentifier),
      ];
    } else {
      flatArray.push(element);
    }
  });
  return flatArray;
};
export default flattenNestedArray;

```
