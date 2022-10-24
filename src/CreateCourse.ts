interface ICourse {
  name: string;
  duration?: number; // aqui eu falo que pode ser opcional
  educator: string
}

class CreateCourseService {
  // se nao vier duração, ele toma 10 semanas como base 
  execute({name,duration = 10,educator}: ICourse){
    console.log(name,duration,educator)
  }
}
export default new CreateCourseService();
