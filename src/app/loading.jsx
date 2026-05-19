import Spinner from "@/components/shared/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="my-15 flex justify-center">
      <Spinner size={50} />
    </div>
  );
};

export default loading;
