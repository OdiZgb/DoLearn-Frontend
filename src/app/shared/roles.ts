// shared/roles.ts
export enum UserRole {
    Student = 1,
    Teacher = 2,
    Admin = 3,
    Parent = 4
  }
  
  export function getRoleLabel(roleId: number): string {
    switch(roleId) {
      case UserRole.Student: return 'Student';
      case UserRole.Teacher: return 'Teacher';
      case UserRole.Admin: return 'Administrator';
      case UserRole.Parent: return 'Parent';
      default: return 'Unknown';
    }
  }