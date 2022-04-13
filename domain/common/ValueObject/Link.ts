class Link {
  private url: string;

  get value() {
    return this.url;
  }
  constructor(url: string) {
    this.url = url;
  }
};