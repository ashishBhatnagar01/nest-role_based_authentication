import { SetMetadata } from '@nestjs/common';
import { RolesEnums } from '../enums/roles.enums';

export const Roles = (...roles: RolesEnums[]) => SetMetadata('roles', roles);
