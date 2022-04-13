import { Annotations } from "domain/common/Annotations";
import { Type } from "domain/common/ValueObject/Type";

export interface RichTextProps {
  prain_text: string;
  href: string;
  annotations: Annotations;
  type: Type;
}
