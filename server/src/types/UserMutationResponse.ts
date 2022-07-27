import { User } from "../entities/User";
import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "./MutationResponse";
import { FieldError } from "./FieldError";

@ObjectType({ implements: IMutationResponse })
export class UserMutationResponse implements IMutationResponse {
  code: number;
  success: boolean;
  message?: string;

  @Field({ nullable: true })
  user?: User; // if (user empty) return null else return user

  @Field((_type) => [FieldError], { nullable: true }) // chen vao cho no tim thay truong FieldError (FieldError la mot truong phuc tap)
  errors?: FieldError[]; // co the tra ve hoac khong tra ve
}
