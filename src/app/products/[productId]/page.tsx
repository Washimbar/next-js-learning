import React from "react";

const DynamicProduct = ({ params }: { params: { productId: string } }) => {
	return (
		<div>
			<h1>Dynamic Product {params?.productId}</h1>
		</div>
	);
};

export default DynamicProduct;
