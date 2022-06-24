"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("\n    <div>\n      <div> Forbidden, you must login first :( </div>\n      <div> <a href=\"/login\">Go to login page</a> </div>\n    </div>   \n  ");
}
var router = (0, express_1.Router)();
exports.router = router;
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email &&
        password &&
        email === "mostafa@gmail.com" &&
        password === "123") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Sorry invalid email or password");
    }
});
router.get("/", function (req, res) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send("\n      <div>\n        <div> You are logged in </div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div> You are not logged in </div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
    res.send("Hi There Welcome To My Application :)");
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Hi Awesome, welcome to protected page...");
});
