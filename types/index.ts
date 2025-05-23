// NOTE This file is auto-generated by Contentlayer

/** Document types */
export type Page = {
  type: "Page";
  title: string;
  description?: string | undefined;
  path: string;
  slug: string;
};

export type Project = {
  published: boolean;
  title: string;
  description: string;
  date?: string | undefined;
  link: string;
  repository?: string | undefined;
  slug: string;
};

/** Nested types */

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes;
export type AllTypeNames = DocumentTypeNames | NestedTypeNames;

export type DocumentTypes = Page | Project;
export type DocumentTypeNames = "Page" | "Project";

export type NestedTypes = never;
export type NestedTypeNames = never;

export type DataExports = {
  allDocuments: DocumentTypes[];
  allPages: Page[];
  allProjects: Project[];
};

export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes;
  documentTypeMap: DocumentTypeMap;
  documentTypeNames: DocumentTypeNames;
  nestedTypes: NestedTypes;
  nestedTypeMap: NestedTypeMap;
  nestedTypeNames: NestedTypeNames;
  allTypeNames: AllTypeNames;
  dataExports: DataExports;
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Page: Page;
  Project: Project;
};

export type NestedTypeMap = {};
