import {Person} from "../../core/models/security/person";

export class Topic {
    id: number;
    title: string;
    theme?: Topic;


    constructor(topic) {
        {
            this.id = topic.id;
            this.title = topic.title;
            this.theme = topic.parent || null;
        }
    }
}