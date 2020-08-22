import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

interface Props {
    login: () => void
}

const Login = (props: Props) => {
  const isAmp = useAmp();

  return (
    <div className="login">
      <button onClick={props.login}>login</button>
    </div>
  );
};

export default Login;
