import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesEnums } from '../enums/roles.enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requireRoles) return true;

    const user = {
      name: 'Ashish',
      roles: [RolesEnums.USER],
    };

    return requireRoles.some((role) => user.roles.includes(role));
  }
}
