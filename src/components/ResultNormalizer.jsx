import React from "react";
import { useState, useEffect } from "react";
import LessonPage from "./LessonPage.jsx";

export default function ResultNormalizer({ lessonsData }) {
  const [lessonsList, setLessonsList] = useState(lessonsData);
  const [normalLessonsList, setNormalLessonsList] = useState([]);

  useEffect(() => {
    setLessonsList(lessonsData);
  }, [lessonsData]);

  useEffect(() => {
    normalLessonsList.length = 0;
    const newLessonsList = [];
    lessonsList.map((lesson) => {
      const normalLessonItem = {};
      lesson.name
        ? (normalLessonItem.key = lesson.name)
        : (normalLessonItem.key = normalLessonItem.title);
      lesson.title
        ? (normalLessonItem.title = lesson.title)
        : (normalLessonItem.title = "Untitled lesson");
      lesson.type
        ? (normalLessonItem.type = lesson.type)
        : (normalLessonItem.type = null);
      lesson.published
        ? (normalLessonItem.published = true)
        : (normalLessonItem.published = false);
      lesson.links
        ? (normalLessonItem.links = lesson.links)
        : (normalLessonItem.links = []);
      lesson.hidden
        ? (normalLessonItem.visibility = false)
        : (normalLessonItem.visibility = true);
      lesson.shortSummary
        ? (normalLessonItem.description = lesson.shortSummary)
        : (normalLessonItem.description = null);
      lesson.keyPoints
        ? (normalLessonItem.keyPoints = lesson.keyPoints)
        : (normalLessonItem.keyPoints = ["will be provided later"]);
      lesson.takeaways
        ? (normalLessonItem.takeaways = lesson.takeaways)
        : (normalLessonItem.takeaways = []);
      lesson.prerequisite
        ? (normalLessonItem.prerequisite = lesson.prerequisite)
        : (normalLessonItem.prerequisite = null);
      lesson.hometask
        ? (normalLessonItem.hometask = lesson.hometask)
        : (normalLessonItem.hometask = [
            "repeat the topics learned in the lecture",
          ]);
      newLessonsList.push(normalLessonItem);
    });
    setNormalLessonsList(newLessonsList);
  }, [lessonsList]);

  return (
    <div className="lessons-list">
      <LessonPage normalLessonsList={normalLessonsList} />
    </div>
  );
}
