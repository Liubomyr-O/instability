import { useState } from "react";

export default function SearchBar({ onKeywordChange }) {
  const keywordChanged = (event) => {
    onKeywordChange(event.target.value);
  };

  return (
    <div className="form__group field">
      <input
        type="input"
        className="form__field"
        placeholder="Name"
        name="search"
        id="search"
        onBlur={keywordChanged}
      />
      <label htmlFor="search" className="form__label">
        Enter keyword
      </label>
    </div>
  );
}
