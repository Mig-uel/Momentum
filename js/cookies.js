export let cookies = (user) => {
  document.cookie = `name=${user.name}; expires=Thu, 18 Dec 2099 12:00:00 UTC`;
  document.cookie = `zip=${user.zip};expires=Thu, 18 Dec 2099 12:00:00 UTC`;
  document.cookie = `lang=${user.lang};expires=Thu, 18 Dec 2099 12:00:00 UTC`;
  document.cookie = `country=${user.country};expires=Thu, 18 Dec 2099 12:00:00 UTC`;
};