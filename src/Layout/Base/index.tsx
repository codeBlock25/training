import { FC, PropsWithChildren } from "react";
import { useAsync } from "react-async-hook";
import { Api } from "../../Services";

interface Props extends PropsWithChildren {}

const BaseLayout: FC<Props> = ({ children }) => {
  const profile1 = useAsync(Api.auth.getProfile, []);
  console.log({ profile1 });
  return <>{children}</>;
};

export default BaseLayout;
