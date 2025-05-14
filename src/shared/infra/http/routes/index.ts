import { Router } from 'express' 
import { alunosRoutes } from './alunos/alunos-routes'
import { matriculasRoutes } from './matriculas/matriculas-routes'
import { cursosRoutes } from './cursos/alunos-routes'

const router = Router()

router.use('/alunos', alunosRoutes)
// router.use('/matriculas', matriculasRoutes)
// router.use('/cursos', cursosRoutes)

export { router }