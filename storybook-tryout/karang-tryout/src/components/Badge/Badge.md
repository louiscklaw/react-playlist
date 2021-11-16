#### When to use:
* Used for status and text with eye-catching appeal.

#### Usage:

```js static
import { Badge } from '@lalamove/karang';
```

**Solid Badge**
```js
<Badge solid>Assigning</Badge>
```

**Solid colored badge**
```js
<Badge variant="secondary" solid>Assigning</Badge>
```

**Solid colored badge with smaller size and icon**
```js
<Badge variant="secondary" icon={<Icon type="unsave" size={12}/>} size="small" solid>Unsaved</Badge>
```

**Subtle Badge**
```js
<Badge>Assigning</Badge>
```

**Subtle colored badge**
```js
<Badge variant="secondary">Assigning</Badge>
```

**Subtle colored badge with smaller size and icon**
```js
<Badge variant="secondary" icon={<Icon type="unsave" size={12}/>} size="small">Unsaved</Badge>
```
