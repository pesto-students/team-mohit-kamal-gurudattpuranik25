const isStrongPassword = (password) => {
  if (
    password.length < 8 ||
    password.includes("password") ||
    checkForUppercase(password)
  ) {
    return false;
  } else {
    return true;
  }
};

// function to check if the password contains an uppercase character or not
const checkForUppercase = (password) => {
  // regular expression
  const regex = /[A-Z]/;
  return !regex.test(password);
};
