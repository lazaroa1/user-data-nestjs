/*
  import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CpfIsUnique } from '../validators';

describe('CpfIsUnique', () => {
  let validator: CpfIsUnique;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CpfIsUnique,
        {
          provide: PrismaService,
          useValue: { user: { findFirst: jest.fn() } },
        },
      ],
    }).compile();

    validator = moduleRef.get<CpfIsUnique>(CpfIsUnique);
    prisma = moduleRef.get<PrismaService>(PrismaService);
  });

  it('should return false if cpf already exists', async () => {
    jest.spyOn(prisma.user, 'findFirst').mockResolvedValue({} as any);
    expect(await validator.validate('12345678901')).toBe(false);
  });

  it('should return true if cpf does not exist', async () => {
    jest.spyOn(prisma.user, 'findFirst').mockResolvedValue(null);
    expect(await validator.validate('12345678901')).toBe(true);
  });
});

*/
