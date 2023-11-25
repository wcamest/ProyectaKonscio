export default function generateId(length: number = 15) {
  const characters = "ABCDEFGHIJKLMNOPQRSTWVWXYZ0123456789";
  let id: string = "";

  for (let it = 0; it < length; it++) {
    const index = Math.floor(Math.random() * characters.length);
    id += characters[index];
  }

  return id;
}
