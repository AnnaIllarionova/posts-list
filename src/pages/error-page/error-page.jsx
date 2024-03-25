import { ButtonToMain } from "../../features/button-to-main";

export const ErrorPage = () => {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p>Страница не найдена</p>
      <ButtonToMain title="Вернуться на главную" />
    </div>
  );
};
