import { container } from 'tsyringe'

import '@shared/container/providers'

import { IAlunosRepository } from '@modules/repositories/i-aluno-repository'
import { AlunosRepository } from '@modules/infra/typeorm/repositories/alunos-repository'

container.registerSingleton<IAlunosRepository>('AlunosRepository', AlunosRepository)