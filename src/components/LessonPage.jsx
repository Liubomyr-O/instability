import { useEffect, useState } from "react";

export default function LessonPage({ normalLessonsList }) {
  const [lessonsData, setLessonsData] = useState(normalLessonsList);

  useEffect(() => {
    setLessonsData(normalLessonsList);
    console.log(normalLessonsList);
  }, [normalLessonsList]);

  return (
    <div className="render-lesson">
      {lessonsData.map((lesson) => {
        return (
          <div className="lesson-card">
            <h5>
              {lesson.key}{" "}
              <span>{lesson.published ? " published " : "unpublished"}</span>
              <span>{lesson.visibility ? "/ visibile" : "/ unvisibile"}</span>
            </h5>
            <h2>{lesson.title}</h2>
            <h4>{lesson.type}</h4>
            <p>{lesson.description}</p>

            <h3>Key Points:</h3>
            <ul>
              {lesson.keyPoints.map((i) => {
                return <li key={`${lesson.key}${i}`}>{i}</li>;
              })}
            </ul>
            <div className="links">
              {lesson.links.map((i) => {
                return (
                  <a
                    type="submit"
                    className="button"
                    href={i[1]}
                    target="_blank"
                    key={`${lesson.key}${i}`}
                  >
                    {i[0]}
                  </a>
                );
              })}
            </div>
            <ul>
              {lesson.takeaways.map((i) => {
                return <li key={`${lesson.key}${i}`}>{i}</li>;
              })}
            </ul>
            <p className="prerequisite">{lesson.prerequisite}</p>
            <h3>Hometask:</h3>
            <ul>
              {lesson.hometask.map((i) => {
                return <li key={`${lesson.key}${i}`}>{i}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
