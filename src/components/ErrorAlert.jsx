import { useEffect, useState } from "react";

export default function ErrorAlert(error) {
  console.log(error);
  const [cause, setCause] = useState("");

  useEffect(() => {
    if (error.error.cause == 500) {
      setCause("Network error 500: Internal Server Error");
    }
    if (error.error.cause == 404) {
      setCause("Network error 404: Server not found");
    }
    if (error.error.message == "Failed to fetch") {
      setCause("Network error: check your internet connection");
    }
    if (error.error.message == "no results") {
      setCause("There are no results for this keyword");
    }
  }, [error]);

  return (
    <div className="error-area">
      <h3>Please try again</h3>
      <h4>{cause}</h4>
    </div>
  );
}
