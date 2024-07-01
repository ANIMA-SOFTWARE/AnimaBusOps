import { LoginForm } from "../components/loginform.component";

//example login page with login form component

export const Page = (props: {error?: string}) => {
  return (
    <div class="flex-col">
      <h1>ANIMA BUSINESS OPERATIONS</h1>
      <LoginForm />
      {props.error && <p>{props.error}</p>}
    </div>
  );
};
