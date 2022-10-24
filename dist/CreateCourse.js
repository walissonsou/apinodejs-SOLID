"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    // se nao vier duração, ele toma 10 semanas como base 
    execute({ name, duration = 10, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
