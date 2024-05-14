/*
  import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { LoginIsUnique } from '../validators';

describe('LoginIsUnique', () => {
  let validator: LoginIsUnique;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        LoginIsUnique,
        {
          provide: PrismaService,
          useValue: { user: { findFirst: jest.fn() } },
        },
      ],
    }).compile();

    validator = moduleRef.get<LoginIsUnique>(LoginIsUnique);
    prisma = moduleRef.get<PrismaService>(PrismaService);
  });

  it('should return false if login already exists', async () => {
    jest.spyOn(prisma.user, 'findFirst').mockResolvedValue({} as any);
    expect(await validator.validate('existingLogin')).toBe(false);
  });

  it('should return true if login does not exist', async () => {
    jest.spyOn(prisma.user, 'findFirst').mockResolvedValue(null);
    expect(await validator.validate('newLogin')).toBe(true);
  });
});

*/
