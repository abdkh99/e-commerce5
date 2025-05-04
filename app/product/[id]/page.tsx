import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
