import { getManager, getRepository } from 'typeorm';
import Department from '../../entities/Department';
import { IDepartmentRepository } from '../IDepartmentRepository';

export class DepartmentsRepository implements IDepartmentRepository {
  async save(department: Department): Promise<Department> {
    const departmentsRepository = getRepository(Department);

    const createDepartment = departmentsRepository.create(department);

    const newDepartment = await departmentsRepository.save(createDepartment);

    return newDepartment;
  }

  async update(department: Department): Promise<Department> {
    const departmentsRepository = getRepository(Department);

    await departmentsRepository.update(department.id, department);

    const updatedDepartment = await departmentsRepository.findOne(department.id);

    return updatedDepartment;
  }

  async find(): Promise<Department[]> {
    const departments = await getManager().getTreeRepository(Department).findTrees();

    return departments;
  }

  async findById(id: string, relations?: string[]): Promise<Department> {
    const departmentsRepository = getRepository(Department);

    const department = await departmentsRepository.findOneOrFail(id, {
      relations,
    });

    return department;
  }

  async delete(id: string): Promise<void> {
    const departmentsRepository = getRepository(Department);

    await departmentsRepository.softDelete(id);
  }

  async restore(id: string): Promise<void> {
    const departmentsRepository = getRepository(Department);

    await departmentsRepository.restore(id);
  }
}
