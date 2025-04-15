const saveParams = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/`;
};

export default saveParams;
