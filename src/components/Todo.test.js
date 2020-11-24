import React from "react";
import renderer from "react-test-renderer";

import Todo from "./Todo";

test("Todo Component", () => {
  const itemObj = {
    id: Date.now(),
    name: "Some Todo",
    complete: false,
  };
  const component = renderer.create(
    <Todo
      key="http://www.facebook.com"
      item={itemObj}
      handleClick={() => console.log()}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
