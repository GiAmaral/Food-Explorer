import { Navigate, useRouteError } from "react-router-dom";

import {
  ErrorBoundaryContainer,
  ErrorBoundaryTitle,
  ErrorBoundaryActions,
  ErrorBoundaryLink,
} from "./styles";

function ErrorBoundary() {
  const error = useRouteError();

  if (error.status === 401) {
    return <Navigate to="/sign-in" />;
  }

  if (error.status === 400) {
    return (
      <ErrorBoundaryContainer>
        <ErrorBoundaryTitle>
          Você informou algum dado que o servidor rejeitou, tente novamente ou
          entre em contato com o suporte
        </ErrorBoundaryTitle>
        <ErrorBoundaryActions>
          <ErrorBoundaryLink to="/">Retornar para a home</ErrorBoundaryLink>
          <ErrorBoundaryLink to="sign-out">Sair</ErrorBoundaryLink>
        </ErrorBoundaryActions>
      </ErrorBoundaryContainer>
    );
  }

  if (error.status === 404) {
    return (
      <ErrorBoundaryContainer>
        <ErrorBoundaryTitle>Página não encontrada</ErrorBoundaryTitle>
        <ErrorBoundaryActions>
          <ErrorBoundaryLink to="/">Retornar para a home</ErrorBoundaryLink>
        </ErrorBoundaryActions>
      </ErrorBoundaryContainer>
    );
  }

  if (error.status === 500) {
    return (
      <ErrorBoundaryContainer>
        <ErrorBoundaryTitle>
          O servidor não foi capaz de processar sua requisição
        </ErrorBoundaryTitle>
        <ErrorBoundaryActions>
          <ErrorBoundaryLink to="/">Retornar para a home</ErrorBoundaryLink>
        </ErrorBoundaryActions>
      </ErrorBoundaryContainer>
    );
  }

  if (error.status === 503) {
    return (
      <ErrorBoundaryContainer>
        <ErrorBoundaryTitle>
          Serviço indisponível. Tente novamente mais tarde.
        </ErrorBoundaryTitle>
      </ErrorBoundaryContainer>
    );
  }

  return (
    <ErrorBoundaryContainer>
      <ErrorBoundaryTitle>
        Algo de errado não está certo
        <div>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      </ErrorBoundaryTitle>
      <ErrorBoundaryActions>
        <ErrorBoundaryLink to="/">Retornar para a home</ErrorBoundaryLink>
        <ErrorBoundaryLink to="sign-out">Sair</ErrorBoundaryLink>
      </ErrorBoundaryActions>
    </ErrorBoundaryContainer>
  );
}

export default ErrorBoundary;
