import React from "react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{ textAlign: "center", color: "red", margin: "20px 0" }}>
      <p>{message || "Щось пішло не так. Спробуйте пізніше."}</p>
    </div>
  );
};

export default ErrorMessage;
