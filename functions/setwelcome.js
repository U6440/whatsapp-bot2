const fs = require("fs")

/**
 * Add welcome text to db
 * @param {string} chatId
 * @param {string} text
 * @param {object} _dir
 * @returns {boolean}
 */
const addCustomWelcome = (chatId, text, _dir) => {
  let position = false;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].from === chatId) {
      position = true;
    }
  });
  if (position === false) {
    const obj = {
      from: chatId,
      textwelcome: text
    }
    _dir.push(obj);
    fs.writeFileSync('./database/customwelcome.json', JSON.stringify(_dir));
    return false;
  }
};

/**
 * Get Custom Welcome Text
 * @param {string} chatId
 * @param {object} _dir
 * @returns {Number}
 */
const getCustomWelcome = (chatId, _dir) => {
  let position = false;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return _dir[position].textwelcome;
  }
}