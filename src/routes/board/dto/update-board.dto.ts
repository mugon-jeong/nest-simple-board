import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { CreateBoardDto } from './create-board.dto';

// PartialType() 함수는 CreateBoardDto 클래스를 확장한 클래스를 반환합니다.
// 이 클래스는 CreateBoardDto 클래스의 모든 속성을 선택적으로 만든 클래스입니다.
// validate() 함수를 사용할 때 CreateBoardDto 클래스의 속성을 모두 필수로 만들지 않아야 합니다.
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {}

// PickType() 함수는 CreateBoardDto 클래스에서 일부 속성만 선택한 클래스를 반환합니다.
// 이 클래스는 CreateBoardDto 클래스의 name 속성만 선택한 클래스입니다.
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['name']) {}


// OmitType() 함수는 CreateBoardDto 클래스에서 일부 속성을 제외한 클래스를 반환합니다.
// 이 클래스는 CreateBoardDto 클래스의 name 속성을 제외한 클래스입니다.
export class UpdateBoardDto extends OmitType(CreateBoardDto, ['name']) {}
