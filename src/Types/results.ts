import { Document } from "mongoose";

export interface Result extends Document {
  regNo: string;
  student: any;
  session: string;
  record: [
    {
      subject: string;
      t1: number;
      t2: number;
      exam: number;
    },
  ];
}

export default Result;
