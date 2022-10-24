import { Request, Response} from 'express'
import CreateCourseService from './CreateCourse'

export default function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name:"NodeJs",
    educator: "Walisson",
    duration: 10,
})

  return res.send();
}
