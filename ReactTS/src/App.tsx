import { JSX, useState } from "react";

function ProductRow({product}: {product: Product}) {
  const span = product.stocked ? product.name :
  <span style={{"color": "red"}}>
    {product.name}
  </span>

  return (
    <tr>
      <td>{span}</td>
      <td>${product.price}</td>
    </tr>
  )
}

function ProductCategoryRow({ category }: {category: Category}) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  )
}

function ProductTable({ products }: ProductProps) {
  const row: JSX.Element[] = []; // 리엑트 요소를 가진 배열을 암시
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      row.push(
        <ProductCategoryRow
        category={product.category}
        key={product.category}/>
      )
    }
    row.push(
      <ProductRow 
      product={product}
      key={product.name} />
    )
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  )
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search about fruits or vegetables"/>
      <label>
        <input type="checkbox" />
        {' '}
        Only show product in stock
      </label>
    </form>
  )
}

type ProductProps = {
  products: Product[]
}

function FilterableProductTable({ products }: ProductProps) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, SetInStockOnly] = useState(false)

  return (
    <div>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  )
}

type Category = "Fruits" | "Vegetables"

type Product = {
  category: Category
  price: number
  stocked: boolean
  name: string
}

const PRODUCTS: Product[] = [
  {category: "Fruits", price: 1, stocked: true, name: "Apple"},
  {category: "Fruits", price: 1, stocked: false, name: "Banana"},
  {category: "Fruits", price: 2, stocked: true, name: "Passionfruit"},
  {category: "Vegetables", price: 3, stocked: true, name: "Pumpkin"},
  {category: "Vegetables", price: 2, stocked: true, name: "Onion"},
  {category: "Vegetables", price: 1, stocked: false, name: "Peas"},
]

export function App() {
  return <FilterableProductTable products={PRODUCTS}/>;
}

export default App;
