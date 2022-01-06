import { Schema, model } from "mongoose";
import ResultType from "../Types/results";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Result: Schema = new Schema({
  regNo: Schema.Types.String,
  student: { type: Schema.Types.ObjectId, ref: "Drivers" },
  session: Schema.Types.String,
  record: [
    {
      subject: Schema.Types.String,
      t1: Schema.Types.Number,
      t2: Schema.Types.Number,
      exam: Schema.Types.Number,
    },
  ],
});

Result.index({
  name: "text",
});

export default model<ResultType>("results", Result);
