import { useRef, useState } from "react";
import { useGetTodosQuery } from "../../app/api-json-placeholder/api";

import { PostList } from "../../widgets/post-list";

export const MainPage = () => {
  const { data: todosData, isLoading, error } = useGetTodosQuery();
  const [isError, setIsError] = useState(null);

  const textRef = useRef([]);

  if (error) {
    setIsError("Произошла ошибка, попробуйте еще раз");
  }

  return (
    <div>
      <h1>Список постов</h1>

      {isLoading ? (
        <p>Данные загружаются</p>
      ) :( isError ? (
        <p>{isError}</p>
      ) : (
        <PostList todosData={todosData} textRef={textRef} />
      ))}
    </div>
  );
};
