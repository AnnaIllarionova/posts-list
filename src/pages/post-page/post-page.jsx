import { useNavigate, useParams } from "react-router-dom";
import { useGetCurrentTodoQuery } from "../../app/api-json-placeholder/api";
import { ButtonToMain } from "../../features/button-to-main";

export const PostPage = () => {
  const { todoId } = useParams();
  const {
    data: currentTodo,
    isLoading: todoIsLoading,
    error: todoError,
  } = useGetCurrentTodoQuery({ id: todoId });
  const navigate = useNavigate();
  if (todoError && todoError.status === 404) {
    navigate("*");
  }

  return todoIsLoading ? (
    <p>Пост загружается...</p>
  ) : (
    <div className="post">
      <h3>Это страница поста номер {todoId}</h3>
      <h1>{currentTodo?.title}</h1>
      <h2>{currentTodo?.body}</h2>
      <ButtonToMain title="Назад" />
    </div>
  );
};
