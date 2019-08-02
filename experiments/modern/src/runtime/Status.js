const GuiObject = require("./GuiObject");

class Status extends GuiObject {
  /**
   * getclassname()
   *
   * Returns the class name for the object.
   * @ret The class name.
   */
  static getclassname() {
    return "Status";
  }
}

module.exports = Status;
