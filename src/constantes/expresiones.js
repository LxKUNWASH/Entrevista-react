export const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{10}$/, // 10 numeros.
    select: /^\d{1}$/,
    codigoPostal: /^\d{5}$/,
    numero:/^\d{2,4}$/,
    rfc:/^[a-zA-Z0-9]{13}$/,
    calle:/[a-zA-Z]+\s?[A-Za-z]?/,
    observaciones: /^.{1,100}$/,
    estatus: /./,
    opcional: /^.$/
  };