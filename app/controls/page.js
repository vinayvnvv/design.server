const { Project } = require("./../models");
const content = require("./content");
class ProjectClass {
  addPage(userId, id, data, callback) {
    Project.findOneAndUpdate(
      { user: userId, _id: id },
      { $push: { pages: data } },
      { new: true }
    )
      .then((res) => {
        callback(false, res);
        content.initContentForProject(res);
      })
      .catch((err) => {
        callback({ error: err, status: 402 });
      });
  }
  editPage(userId, id, pageId, data, callback) {
    var updateObj = {};
    Object.keys(data).forEach((key) => {
      updateObj[`pages.$[outer].${key}`] = data[key];
    });
    Project.findOneAndUpdate(
      { user: userId, _id: id },
      { $set: updateObj },
      { arrayFilters: [{ "outer._id": pageId }], new: true }
    )
      .then((res) => {
        callback(false, res);
      })
      .catch((err) => {
        callback({ error: err, status: 402 });
      });
  }
  deletePage(userId, id, pageId, callback) {
    Project.findByIdAndUpdate(
      { user: userId, _id: id },
      { $pull: { pages: { _id: pageId } } },
      { new: true }
    )
      .then((res) => {
        callback(false, res);
        content.deleteContentByPage(pageId);
      })
      .catch((err) => {
        console.log(err);
        callback({ error: err, status: 402 });
      });
  }
}

module.exports = new ProjectClass();
