export const validateData = (name, email, password) => {
  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPasswordValid = /^[A-Za-z]\w{7,14}$/.test(password);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
