function saveCourse(course, callback) {
    var _this = this;
    this.course = course;
    setTimeout(function () {
        var _a, _b;
        callback((_b = (_a = _this.course) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : 'unknown course');
    }, 1000);
}
var cb = function (title) { return console.log('Save Successful.', title); };
saveCourse({ title: 'TS BootCamp' }, cb);
