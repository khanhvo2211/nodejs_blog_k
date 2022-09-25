//require models index.js đến, dùng find và tạo một hàm để respon nó

const { MutiplyMongooseToObject } = require("../../util");
const Course = require("../models/Course");

class SiteController {
  index(req, res, next) {
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //     res.status(500).json({ error: "message" });
    //   }
    // });
    //Dùng promise để code ngắn gọn hơn
    Course.find({})
      .then((courses) =>
        res.render("home", { courses: MutiplyMongooseToObject(courses) })
      )
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
