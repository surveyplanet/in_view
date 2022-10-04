# In View

Check whether and element is within the browser viewport.

## Install

```
npm install --save @surveyplanet/in-view
```

## Example

```js
import inView from 'in_view';

const target = document.getElementById('target', {});

document.addEventListener('scroll', (e) => {

  let isInView = inView(target, scrollOptions); \\ ture or flase
  console.log('element is in view:', isInView );

});
```

## Options

**Returns**: <code>Boolean</code> - Whether the element is inside the document viewport or not.

| Param           | Type                                            | Description                                                                      |
| --------------- | ----------------------------------------------- | -------------------------------------------------------------------------------- |
| element         | <code>HTMLElement</code> \| <code>String</code> | An HTMLElement or String containing a valid id (#my-elm) or class.(.my-elm) name |
| options         | <code>Object</code>                             | function options.                                                                |
| options.partial | <code>Boolean</code>                            | When true the element is considered inside the viewport if any part is visible.  |
| options.offset  | <code>Number</code> \| <code>String</code>      | Offset the element either by number of pixels or a percentage e.g.:'50%'         |

## Testing

```
npm install
npm test
```
