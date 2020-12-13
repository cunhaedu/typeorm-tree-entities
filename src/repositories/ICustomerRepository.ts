import Orphanage from '../entities/Orphanage';

export interface IOrphanagesRepository {
  find(relations?: string[]): Promise<Orphanage[]>
  findById(id: number, relations?: string[]): Promise<Orphanage>
  save(orphanage: Orphanage): Promise<void>
}
