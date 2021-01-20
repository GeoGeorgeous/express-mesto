module.exports = function handleCheck(err, res, env) {
  // Фильтрует и отправляет ошибки.
  // Принимает:
  //    Объект ошибки;
  //    Объект респонса;
  //    EVN — строку с контекстом для вывода ошибки.

  const errors = {
    ValidationError: {
      message: { message: `Не удалось модифицировать ${env}. Переданы некорректные данные. Подробно: ${err.message}` },
      code: 400,
    },
    CastError: {
      message: { message: `Не удалось найти ${env} не существует` },
      code: 400,
    },
    DocumentNotFoundError: {
      message: { message: `Не удалось найти ${env} не существует` },
      code: 404,
    },
    ServerBad: {
      message: { message: 'Произошла ошибка сервера.' },
      code: 500,
    },
  };

  const logger = () => {
    console.log('');
    console.log(' !  Произошла ошибка с БД:');
    console.log(`||| Когда: ${new Date(Date.now()).toString()}`);
    console.error(`||| Ошибка: ${err.name}`);
    console.error(`||| Сообщение: ${err.message}`);
  };

  if (err.name in errors) {
    res.status(errors[err.name].code).send(errors[err.name].message);
    logger();
  } else {
    res.status(errors.ServerBad.code).send(errors.ServerBad.message);
    logger();
  }
};
