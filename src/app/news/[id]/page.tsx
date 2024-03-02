"use client";

const NewsIDPage = ({ params }: { params: { id: number } }) => {
    return <div>{params.id}</div>;
};

export default NewsIDPage;
