import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function UseFieldArrayHelloworld() {
  const { register, control, handleSubmit } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });
  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "test"
  });

  return (
    <form onSubmit={handleSubmit(data => console.log("data", data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            {/* important: useFieldArray only works with ref={register()} */}
            <input name={`test[${index}]`} defaultValue={item.name} ref={register()} />
            <input name={`test_a[${index}]`} defaultValue={item.name_a} ref={register()} />
            <input name={`test_b[${index}]`} defaultValue={item.name_b} ref={register()} />
            <button onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => append({ name: "test", name_a:"name_a", name_b:"name_b" })} >
        append
      </button>
      <button type="button" onClick={() => prepend({ name: "test1", name_a:"name_a", name_b:"name_b" })} >
        prepend
      </button>
      <button type="submit">submit</button>
    </form>
  );
}


export default UseFieldArrayHelloworld