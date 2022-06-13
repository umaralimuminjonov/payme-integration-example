const userModel = require("../models/user.model");

class UserRepo {
  constructor(model) {
    this.model = model;
  }

  async getById(userId) {
    return this.model.findById(userId);
  }
}

module.exports = new UserRepo(userModel);
