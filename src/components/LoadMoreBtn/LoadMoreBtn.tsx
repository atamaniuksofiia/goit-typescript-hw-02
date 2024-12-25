import React from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "block",
        margin: "20px auto",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
      }}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
