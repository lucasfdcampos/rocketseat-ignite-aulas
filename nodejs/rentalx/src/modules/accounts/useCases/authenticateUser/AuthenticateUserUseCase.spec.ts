import { AppError } from '../../../../errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUsecase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUsecase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      name: 'Lucas',
      email: 'lucascampos.ads@gmal.com',
      password: '123456',
    };

    await createUserUsecase.execute(user);

    const login = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(login).toHaveProperty('token');
  });

  it('should not be able to authenticate a non-existing user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'lucascampos.ads@gmail.com',
        password: '123456',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with invalid password', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '000123',
        name: 'Lucas',
        email: 'lucascampos.ads@gmal.com',
        password: '123456',
      };

      await createUserUsecase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrect-password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
