export class Pizza {
  readonly id: number;
  readonly totalTopics: number;
  readonly topics: Topic[];

  constructor(data: {
    id: number,
    totalTopics: number,
    topics: Topic[],
  }) {
    this.id = data.id;
    this.totalTopics = data.totalTopics;
    this.topics = data.topics;
  }
}

export class Topic {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
