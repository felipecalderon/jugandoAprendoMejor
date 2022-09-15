exports.validador = (schema) => (payload) => schema.validate(payload, { abortEarly: false });

//exports.validador = (schema) => schema.validate({}, { abortEarly: false });
