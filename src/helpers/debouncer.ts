const debounce = <T extends Function>(func: T, timeout = 250) => {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<any>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  };

export default debounce;