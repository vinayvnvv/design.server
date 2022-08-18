const { Content } = require("./../models");

class ContentClass {
  initContentForProject(project, pageId) {
    console.log("initContentForProject", project);
    const { _id: projectId, pages } = project;
    if (pages && pages.length > 0) {
      const page = pageId || pages[pages.length - 1]._id;
      this.addContent({ page: page, project: projectId });
    }
  }
  addContent(data, callback = () => {}) {
    const { page, project } = data;
    const content = new Content({ page, project });
    content
      .save()
      .then((doc) => {
        callback(false, doc);
      })
      .catch((err) => {
        console.error(err);
        callback(err);
      });
  }
  editContent(id, data, callback = () => {}) {
    Content.findOneAndUpdate(
      { _id: id },
      { $set: { content: data } },
      { new: true }
    )
      .then((doc) => {
        callback(false, doc);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  }
  getContent(project, page, callback = () => {}) {
    Content.findOne({ project, page })
      .then((doc) => {
        callback(false, doc);
      })
      .then((err) => {
        console.log(err);
        callback(err);
      });
  }
  deleteContentByPage(page, callback = () => {}) {
    Content.remove({ page })
      .then((doc) => {
        callback(false, doc);
      })
      .then((err) => {
        console.log(err);
        callback(err);
      });
  }
}
module.exports = new ContentClass();
