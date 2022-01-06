import { Schema, model } from "mongoose";
import Subject from "../Types/subject";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Subjects: Schema = new Schema({
  name: Schema.Types.String,
});

Subjects.index({
  name: "text",
});

export default model<Subject>("subjects", Subjects);
