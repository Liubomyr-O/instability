import { useEffect, useState } from "react";

export default function GetDataByKeyword({ SEARCH_KEYWORD, findLessons }) {
  const [keyword, setKeyword] = useState(SEARCH_KEYWORD);
  const [dataResponse, setDataResponse] = useState("");

  function resultReceived(dataResponse) {
    findLessons(dataResponse);
  }

  useEffect(() => {
    setKeyword(SEARCH_KEYWORD);
  }, [SEARCH_KEYWORD]);

  useEffect(() => {
    fetch(`https://react-course-api.azurewebsites.net/lesson/${SEARCH_KEYWORD}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return alert(
            "помилка роботи серверу, ми працюємо над цим, спробуйте знову"
          );
        }
      })
      .then((data) => {
        setDataResponse(data);
        console.log(`фетч віддає - ${data}`);
      })
      .catch((err) =>
        alert("якась інша помилка роботи серверу, спробуйте знову")
      );
  }, [keyword]);

  if (dataResponse) {
    console.log(`ключове слово - ${keyword}`);
    console.log(`відповідь по цьому ключовому слову - ${dataResponse}`);
    resultReceived(dataResponse);
  }
}
