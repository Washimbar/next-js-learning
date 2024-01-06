import Link from "next/link";
import React from "react";

const Products = () => {
	const productId = 100;
	return (
		<div>
			<Link href="/">Home</Link>
			<Link href={`/products/${productId}`}>Products{productId}</Link>
			<h1>Products</h1>
		</div>
	);
};

export default Products;
