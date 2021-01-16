module.exports = function handleCheck(err, res, env) {
  // Функция возвращает res с кодом и текстом ошибки и отправляет его.
  // Принимает:
  //    Объект ошибки;
  //    Объект респонса;
  //    EVN — строку с контекстом для вывода ошибки.
  let ERROR_CODE;
  let ERROR_MESSAGE;
  console.log(err);
  if (err.name.includes('ValidationError')) {
    ERROR_CODE = 400;
    ERROR_MESSAGE = { message: `Не удалось добавить ${env}. Переданы некорректные данные.` };
  } else if (err.name.includes('CastError')) {
    ERROR_CODE = 404;
    ERROR_MESSAGE = { message: `Не удалось найти ${env}.` };
  } else {
    ERROR_CODE = 500;
    ERROR_MESSAGE = { message: 'Произошла ошибка сервера' };
  }

  return (res.status(ERROR_CODE).send(ERROR_MESSAGE));
};
