import { Environment } from '@projectx/models';
import { IsEnum, IsNumber, Max, Min } from 'class-validator';

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber({ allowNaN: false })
  @Min(0)
  @Max(65535)
  ORDER_PORT: number;
}
