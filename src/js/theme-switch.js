const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
// console.dir(switcherRef.checked);

const toggleThemeHandler = event => {
  //   console.dir(event.currentTarget.checked);
  //   console.dir(event.currentTarget);
  if (event.currentTarget == switcherRef) {
    if (event.currentTarget.checked) {
      bodyRef.classList.remove(Theme.LIGHT);
      bodyRef.classList.add(Theme.DARK);
      localStorage.setItem('savedTheme', Theme.DARK);
      return;
    }

    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('savedTheme', Theme.LIGHT);
  }
};
// Получение инфы от localStorage
const savedTheme =
  localStorage.getItem('savedTheme') === null
    ? Theme.LIGHT
    : localStorage.getItem('savedTheme');

// инициализация по результатам инфы от localStorage
if (savedTheme == Theme.DARK) {
  switcherRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
} else bodyRef.classList.add(Theme.LIGHT);

// действие при переключении переключателя темы
switcherRef.addEventListener('change', toggleThemeHandler);
