"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorUserPage = ({ error, reset }: Props) => {
  console.log(`Error: ${error}`);
  return (
    <>
      <div className="text-xl text-red-500">An unexpected error has occurred.</div>
      <button onClick={() => reset()} className="btn">
        Retry
      </button>
    </>
  );
};

export default ErrorUserPage;
