import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsString, MaxLength } from 'class-validator';

export class GetAnswerRequestDTO {
  @IsDefined()
  @IsString()
  @MaxLength(512)
  @Transform(({ value }) => {
    return (value as string).trim();
  })
  @ApiProperty()
  question: string;
}

export class GetAnswerResponseDTO {
  @ApiProperty({ nullable: true })
  answer: string | null;
}
