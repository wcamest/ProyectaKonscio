export const GenerateId = (length: number = 15) => {
  const CHARACTERS_WITHOUT_DIGITS = "ABCDEFGHIJKMLNOPQRSTUVWXYZ";
  const CHARACTERS = "ABCDEFGHIJKMLNOPQRSTUVWXYZ0123456789";
  let id = "";

  for (let it = 0; it < length; it++) {
    if (it === 0) {
      id +=
        CHARACTERS_WITHOUT_DIGITS[
          Math.floor(Math.random() * CHARACTERS_WITHOUT_DIGITS.length)
        ];
    } else {
      id += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }
  }

  return id;
};
