export default class Home {
  id: string;
  title: string;
  classesRef: string[];

  constructor(id: string, title: string, classesRef: string[]) {
    this.id = id;
    this.title = title;
    this.classesRef = classesRef;
  }
}
