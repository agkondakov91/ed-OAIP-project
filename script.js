const btns = Array.from(document.querySelectorAll(".theme"));
const page = document.documentElement;

const setTheme = (theme) => {
  page.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

const getTheme = () => {
  return localStorage.getItem("theme");
};

const onLoad = () => {
  const theme = getTheme();
  if (theme) {
    setTheme(theme);
  } else {
    setTheme("light");
  }
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  })
);

onLoad();
