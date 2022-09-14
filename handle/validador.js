const joi = require("joi");

exports.validador = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });
