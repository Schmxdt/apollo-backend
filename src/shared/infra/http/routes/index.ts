import { Router } from 'express' 
import { alunosRoutes } from './alunos/alunos-routes'
import { cursosRoutes } from './cursos/cursos-routes'
import { matriculasRoutes } from './matriculas/matriculas-routes'

const router = Router()

router.use('/alunos', alunosRoutes)
router.use('/cursos', cursosRoutes)
// router.use('/matriculas', matriculasRoutes)

export { router }