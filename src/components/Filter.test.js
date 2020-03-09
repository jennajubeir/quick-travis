import React from "react";
import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import Filter from "./Filter";

test("filter test", () => {
  const setProducts = jest.fn();
  const setApparelFilter = jest.fn();

  const allProducts = [{ brand: "Lululemon", gender: "Womens", price: 98 }];

  const { getByTestId } = render(
    <Filter allProducts={allProducts} setProducts={setProducts} />
  );

  const filter = getByTestId("filter");
  expect(filter.value).toBe("product-list");
});
