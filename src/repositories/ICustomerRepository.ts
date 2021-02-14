import Customer from '../entities/Customer';

export interface ICustomersRepository {
  find(relations?: string[]): Promise<Customer[]>
  findById(id: number, relations?: string[]): Promise<Customer>
  save(customer: Customer): Promise<void>
}
