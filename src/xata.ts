// Generated by Xata Codegen 0.29.4. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  { name: "MainAccount", columns: [] },
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "slug", type: "string" },
      { name: "description", type: "text" },
      { name: "pubDate", type: "datetime" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type MainAccount = InferredTypes["MainAccount"];
export type MainAccountRecord = MainAccount & XataRecord;

export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;

export type DatabaseSchema = {
  MainAccount: MainAccountRecord;
  Posts: PostsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://FillinTheBlanks-s-workspace-ifki3b.ap-southeast-2.xata.sh/db/erpcoredb",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
