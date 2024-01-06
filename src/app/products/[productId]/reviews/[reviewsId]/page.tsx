import React from "react";

const DynamicReviews = ({ params }: { params: { reviewsId: string } }) => {
	return (
		<div>
			<h1>Dynamic Reviews {params.reviewsId}</h1>
		</div>
	);
};

export default DynamicReviews;
