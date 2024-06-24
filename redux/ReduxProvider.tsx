"use client";
import { store } from "./store";
import { Provider } from "react-redux";
function ReduxProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProviders;
