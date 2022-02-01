import { EntityRepository, Repository } from "typeorm";
import { Source } from "./source.entity";

@EntityRepository(Source)
export default class SourceRepository extends Repository<Source> {}
