"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCourse_1 = __importDefault(require("./CreateCourse"));
function createCourse(req, res) {
    CreateCourse_1.default.execute({
        name: "NodeJs",
        educator: "Walisson",
        duration: 10,
    });
    CreateCourse_1.default.execute({
        name: ".NET",
        educator: "Souza",
    });
    return res.send();
}
exports.default = createCourse;
