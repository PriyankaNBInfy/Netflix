export const validateData = (email, password) => {
  // const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  // if (!isNameValid) return "Name is not valid";

  if(!email || !password) return "Email and password are mandatory";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
