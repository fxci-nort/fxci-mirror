const getParams = (name: string): string | undefined => {
  const cookieMatch = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  if (cookieMatch) return cookieMatch[2];

  const localValue = localStorage.getItem(name);
  if (localValue) return localValue;

  const params = new URLSearchParams(window.location.search);
  const urlValue = params.get(name);
  if (urlValue) return urlValue;

  return undefined;
};

export default getParams;
