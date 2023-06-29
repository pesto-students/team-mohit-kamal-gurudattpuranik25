console.log(window);

const localStorageItem = localStorage.setItem(
  "programmingLanguage",
  "javaScript"
);

const sessionStorageItem = sessionStorage.setItem("jsLibrary", "React");

const displayWindowProperties = () => {
  console.log(`User agent: ${window.navigator.userAgent}`);
  console.log(`Screen width: ${window.screen.width}`);
  console.log(`Screen height: ${window.screen.height}`);
  console.log(`Location href: ${window.location.href}`);
  console.log(`Location pathname: ${window.location.pathname}`);
  console.log(`Local storage: ${localStorage.getItem("programmingLanguage")}`);
  console.log(`Session storage: ${sessionStorage.getItem("jsLibrary")}`);
};

displayWindowProperties();
