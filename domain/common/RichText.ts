import { Annotations } from "domain/common/ValueObject/Annotations";

export interface RichTextProps {
  prain_text: string;
  href: string;
  annotations: Annotations;
}
