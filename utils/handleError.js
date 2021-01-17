module.exports = function handleCheck(err, res, env) {
  // Функция возвращает res с кодом и текстом ошибки и отправляет его.
  // Принимает:
  //    Объект ошибки;
  //    Объект респонса;
  //    EVN — строку с контекстом для вывода ошибки.

  const logger = () => {
    console.log(new Date(Date.now()).toString());
    console.error(err.name);
    console.error(err.message);
  };

  let ERROR_CODE;
  let ERROR_MESSAGE;
  if (err.name.includes('ValidationError')) {
    ERROR_CODE = 400;
    ERROR_MESSAGE = { message: `Не удалось модифицировать ${env}. Переданы некорректные данные. ${err.message}` };
    logger();
  } else if (
    err.name.includes('CastError')
      || err.name.includes('DocumentNotFoundError')) {
    ERROR_CODE = 404;
    ERROR_MESSAGE = { message: `Не удалось найти ${env}. Возможно, её не существует` };
    logger();
  } else {
    ERROR_CODE = 500;
    ERROR_MESSAGE = { message: 'Произошла ошибка сервера.' };
    logger();
  }

  return (res.status(ERROR_CODE).send(ERROR_MESSAGE));
};
