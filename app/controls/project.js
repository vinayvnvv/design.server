const { Project } = require("./../models");
const content = require("./content");
class ProjectClass {
  getProjects(userId, callback) {
    if (!userId) {
      callback({ error: "user not found" });
    } else {
      Project.find({}, (err, res) => {
        if (err) {
          callback({ error: err, status: 402 });
        } else {
          callback(false, res);
        }
      });
    }
  }
  getProject(userId, projectId, callback) {
    if (!userId) {
      callback({ error: "user not found" });
    } else {
      Project.findOne({ _id: projectId, user: userId }, (err, res) => {
        if (err) {
          callback({ error: err, status: 402 });
        } else {
          callback(false, res);
        }
      });
    }
  }
  addProject(userId, data, callback) {
    const project = new Project({ user: userId, ...data });
    project
      .save()
      .then((res) => {
        callback(false, res);
        content.initContentForProject(res);
      })
      .catch((err) => {
        console.log(err);
        callback({ error: err, status: 402 });
      });
  }
}

module.exports = new ProjectClass();
