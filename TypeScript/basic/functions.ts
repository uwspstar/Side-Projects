// always give return type
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// no return with type "void"
const logger = (msg: string): void => {
  console.log(msg);
};

// error with return type "never"
const throwError = (msg: string): never => {
  throw new Error(msg);
};

// new error with return type "string"
const throwError2 = (msg: string): string => {
  if (!msg) throw new Error(msg);
  return msg;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date, forecast.weather);
};

// ES2015
const logWeatherEs2015 = (
  { date, weather },
  { date: Date, weather: string }
): void => {
  console.log(date, weather);
};

logWeather(todaysWeather);
