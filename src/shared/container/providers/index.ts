import { container } from 'tsyringe'

import '@shared/container/providers'

import { IAlunosRepository } from '@modules/repositories/i-alunos-repository'
import { AlunosRepository } from '@modules/infra/typeorm/repositories/alunos-repository'

import { ICursosRepository } from '@modules/repositories/i-cursos-repository'
import { CursosRepository } from '@modules/infra/typeorm/repositories/cursos-repository'

container.registerSingleton<IAlunosRepository>('AlunosRepository', AlunosRepository)
container.registerSingleton<ICursosRepository>('CursosRepository', CursosRepository)