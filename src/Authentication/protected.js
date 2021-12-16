import { Route, Redirect } from "react-router-dom";

export function ProtectedRouter({ component, ...rest }) {
  const RenderComponents = component;
  const hasToken = localStorage.getItem("token");
  console.log(hasToken);
  return (
    <Route
      {...rest}
      render={(props) => {
        return hasToken !== null ? (
          <RenderComponents {...props} />
        ) : (
          <Redirect to={{ pathname: "/signin" }} />
        );
      }}
    />
  );
}
