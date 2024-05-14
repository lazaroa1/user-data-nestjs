/*
  import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { EmailIsUnique } from '../validators';

describe('EmailIsUnique', () => {
  let validator: EmailIsUnique;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        EmailIsUnique,
        {
          provide: PrismaService,
          useValue: { user: { findFirst: jest.fn() } },
        },
      ],
    }).compile();

    validator = moduleRef.get<EmailIsUnique>(EmailIsUnique);
    prisma = moduleRef.get<PrismaService>(PrismaService);
  });

  it('should return false if email already exists', async () => {
    jest.spyOn(prisma.user, 'findFirst').mockResolvedValue({} as any);
    expect(await validator.validate('existing@email.com')).toBe(false);
  });

  it('should return true if email does not exist', async () => {
    jest.spyOn(prisma.user, 'findFirst').mockResolvedValue(null);
    expect(await validator.validate('new@email.com')).toBe(true);
  });
});

*/
