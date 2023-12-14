/**
 * Abstract Entity Parent
 * @author J. R. Smith
 * @since 14/12/2023
 */
export abstract class Entity {
  static convert<T extends Entity>(this: { new(): T }, obj: object): T {
    return Object.assign(new this(), obj);
  }

}
