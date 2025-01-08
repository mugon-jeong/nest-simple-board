import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @ApiProperty({
    description: '게시글 제목',
    required: true,
    example: '게시글 제목',
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: '게시글 내용',
    required: true,
    example: '게시글 내용',
  })
  contents: string;
}
