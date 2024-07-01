//example login form component

export const LoginForm = () => {
  return (
    <form class="flex-col" hx-post="/login" hx-target="body" hx-replace-url="true">
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="Submit" hx-post="/login" />
    </form>
  );
};
