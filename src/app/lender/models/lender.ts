import { User } from "../../user/models/user";
import { Work } from "./work";

export class Lender extends User{

    works: Work[]
}