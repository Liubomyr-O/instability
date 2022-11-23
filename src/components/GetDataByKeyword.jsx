import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import ErrorAlert from "./ErrorAlert.jsx";

export default function GetDataByKeyword({ SEARCH_KEYWORD, findLessons }) {
  const [keyword, setKeyword] = useState(SEARCH_KEYWORD);
  const [dataResponse, setDataResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function resultReceived(dataResponse) {
    findLessons(dataResponse);
  }

  useEffect(() => {
    setKeyword(SEARCH_KEYWORD);
  }, [SEARCH_KEYWORD]);

  useEffect(() => {
    setError(false);
    setLoading(true);
    fetch(`https://react-course-api.azurewebsites.net/lesson/${SEARCH_KEYWORD}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setLoading(false);
          throw new Error("Network failed, please try again", {
            cause: response.status,
          });
        }
      })
      .then((data) => {
        setDataResponse(data);
        console.log(`фетч віддає - ${data}`);
        if (data.length == 0) {
          setError({ message: "no results" });
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [keyword]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(`помилка виникла ось така - ${error}`);
  }

  if (dataResponse) {
    console.log(`ключове слово - ${keyword}`);
    resultReceived(dataResponse);
  }
  return error && <ErrorAlert error={error} />;
}
