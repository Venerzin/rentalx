import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specficiations: Specification[] = [];

  private static INSTANCE: SpecificationsRepository; //eslint-disable-line

  constructor() {
    this.specficiations = [];
  }

  public static getInstance(): SpecificationsRepository /*eslint-disable-line*/ {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationsDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specficiations.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specficiations.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
