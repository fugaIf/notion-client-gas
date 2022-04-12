import { Color } from "domain/common/ValueObject/Color";

export interface AnnotationsProps {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: Color;
}

export class Annotations {
  private bold: boolean;
  private italic: boolean;
  private strikethrough: boolean;
  private underline: boolean;
  private code: boolean;
  private color: Color;

  private constructor(props: AnnotationsProps) {
      this.bold = props.bold;
      this.italic = props.italic;
      this.strikethrough = props.strikethrough;
      this.underline = props.underline;
      this.code = props.code;
      this.color = props.color;
  }
}
