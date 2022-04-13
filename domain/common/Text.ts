export interface TextProps {
  content: string;
  link: Link;
}

export class Text {
  private content: string;
  private link: Link;

  private constructor(props: TextProps) {
    this.content = props.content;
    this.link = props.link;
  }
};