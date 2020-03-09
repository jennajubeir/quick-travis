import React from "react";
import { render, fireEvent } from "react-testing-library";
import Filter from "./Filter";

test("filter test", () => {
  const setProducts = jest.fn();
  const allProducts = jest.fn();

  const allProducts = [{ brand: "Lululemon", gender: "Womens", price: 98 }];

  const { getByTestId } = render(
    <Filter allProducts={allProducts} setProducts={setProducts} />
  );

  fireEvent.click(getByTestId("button-test"));
  //expect(setProducts).toBeCalledWith(itemIndex);
  expect(setProducts).toHaveBeenCalledTimes(1);
});
