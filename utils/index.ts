const debounce = (func: Function, delay: number) => {
  let debounceTimer: NodeJS.Timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

export default debounce;
