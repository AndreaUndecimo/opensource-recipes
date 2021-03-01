export const randomFoodEmojisArray = ["🍔", "🌭", "🥑", "🍰", "🍉", "🌶", "🍩"];

export const getRandomEmoji = (emojiArray) => {
  return emojiArray[Math.floor(Math.random() * 7)];
};
