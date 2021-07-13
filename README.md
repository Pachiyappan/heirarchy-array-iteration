# heirarchy-array-iteration

Method 1: 

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


Method 2: 


```
flatenSubAccounts = (r, a) => {
      var b = {};
      Object.keys(a).forEach(function (k) {
          if (k !== 'Children') {
              b[k] = a[k];
          }
      });
      r.push(b);
      if (Array.isArray(a.Children)) {
          b.Children = a.Children.map(function (a) { return a.id; });
          return a.Children.reduce(this.flatenSubAccounts, r);
      }
      return r;
  }
  ```
  
  data.reduce(flatenSubAccounts , []);

