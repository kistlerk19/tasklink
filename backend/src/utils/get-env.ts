export const getEnv = (key: string, defaultValue: string = ""): string => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable "${key}" not found.`);
    if (defaultValue) {
      return defaultValue;
    }
    return value || defaultValue;
  }
  return value;
};
