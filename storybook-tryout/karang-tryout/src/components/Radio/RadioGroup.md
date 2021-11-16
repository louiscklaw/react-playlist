#### Usage:

**Basic**

```jsx static
<RadioGroup name="payment" value="cash">
  {Radio => (
    <>
      <Radio value="wallet">Wallet</Radio>
      <Radio value="cash">Cash</Radio>
      <Radio disabled value="credit">
        Credit Card
      </Radio>
    </>
  )}
</RadioGroup>
```

```js
initialState = { value: 'cash' };

const list = [
  {
    label: 'Wallet',
    value: 'wallet',
  },
  {
    label: 'Cash',
    value: 'cash',
  },
  {
    label: 'Credit Card',
    value: 'credit',
  },
];

<RadioGroup
  name="payment"
  value={state.value}
  onChange={value => setState({ value })}
>
  {Radio =>
    list.map(item => (
      <Radio
        disabled={item.value === 'credit'}
        key={item.value}
        value={item.value}
      >
        {item.label}
      </Radio>
    ))
  }
</RadioGroup>;
```

**Uncontrolled**

```jsx static
<RadioGroup name="uncontrolled" defaultValue="abc">
  {Radio => (
    <>
      <Radio value="abc">abc</Radio>
      <Radio value="edf">edf</Radio>
      <Radio value="xyz" disabled>
        xyz
      </Radio>
    </>
  )}
</RadioGroup>
```

```js
<RadioGroup name="uncontrolled" defaultValue="abc">
  {Radio => (
    <>
      <Radio value="abc">abc</Radio>
      <Radio value="edf">edf</Radio>
      <Radio value="xyz" disabled>
        xyz
      </Radio>
    </>
  )}
</RadioGroup>
```

### Variants

**`list`**

```jsx static
<RadioGroup variant="list" ... > ... </RadioGroup>
```

```js
initialState = { value: '12:00 p.m.' };

const list = [
  {
    label: '11:00 a.m.',
    value: '11:00 a.m.',
  },
  {
    label: '12:00 p.m.',
    value: '12:00 p.m.',
  },
];

<RadioGroup
  name="timeslot-block"
  value={state.value}
  onChange={value => setState({ value })}
  variant="list"
>
  {Radio =>
    list.map(item => (
      <Radio key={item.value} value={item.value}>
        {item.label}
      </Radio>
    ))
  }
</RadioGroup>;
```

**`toggle`**

```jsx static
<RadioGroup variant="toggle" ... > ... </RadioGroup>
```

```js
initialState = { value: 'CANCEL_ORDER_1' };

const list = [
  {
    label: 'Driver is too far.',
    value: 'CANCEL_ORDER_1',
  },
  {
    label: 'I need to change my order info.',
    value: 'CANCEL_ORDER_2',
  },
];

<RadioGroup
  name="cancel_reason"
  value={state.value}
  onChange={value => setState({ value })}
  variant="toggle"
>
  {Radio =>
    list.map(item => (
      <Radio key={item.value} value={item.value} block>
        {item.label}
      </Radio>
    ))
  }
</RadioGroup>;
```

### Customization

Function as child Component (FaCC) provides a finer customization capability. Allowing you to compose UI with various components.

**Custom component as radio buttons**

Instead of using the provided `Radio` component to render radio UI, use any component as radio. Use the update function provided in second argument to update the value of `RadioGroup`.

```js
initialState = { value: 'hate' };

const list = [
  { value: 'hate', color: '#E15453' },
  { value: 'dislike', color: '#F07A40' },
  { value: 'neutral', color: '#FFA744' },
  { value: 'like', color: '#80AE64' },
  { value: 'love', color: '#00BC9C' },
];
<div>
  <Icon type={state.value} color="#FFF" size={128} />
  <pre style={{ display: 'inline-block' }}>
    <code>{JSON.stringify(state)}</code>
  </pre>
  <hr />
  <RadioGroup
    name="feedback"
    value={state.value}
    onChange={value => setState({ value })}
  >
    {(_, update) =>
      list.map(item => (
        <Icon
          style={{ cursor: 'pointer' }}
          size={state.value === item.value ? 48 : 32}
          key={item.value}
          type={item.value}
          color={item.color}
          onClick={update.bind(null, item.value)}
        />
      ))
    }
  </RadioGroup>
</div>;
```

**Custom layout for radio buttons**

Here is an example using `List` component to layout radio buttons.

```jsx
initialState = { value: 'hate' };

const list = [
  { value: 'hate', color: '#E15453' },
  { value: 'dislike', color: '#F07A40' },
  { value: 'neutral', color: '#FFA744' },
  { value: 'like', color: '#80AE64' },
  { value: 'love', color: '#00BC9C' },
];

<RadioGroup
  name="feedback"
  value={state.value}
  onChange={value => setState({ value })}
>
  {Radio => (
    <List
      unique="value"
      items={list}
      render={({ data, Item, getProps }) => (
        <Item {...getProps()}>
          <Radio value={data.value}>{data.value}</Radio>
        </Item>
      )}
    />
  )}
</RadioGroup>;
```
