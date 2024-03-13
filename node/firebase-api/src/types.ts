export type CRUD_R_OPTIONS = {
  collectionName: string
  fbId?: string
  limit?: number
  orderBy?: string
  sort?: "ASC"|"DESC"
};

export type HostShape = {
  icon?: string
  hostname: string;
  env: string | null;
  baseUrl: string;
};

export type FirebaseItem = {
  fbId: string;
  data?: unknown;
};

export type LinkShape = {
  label?: string;
  url?: string;
  target?: string;
  icon?: string;
};

export type LinkList = Array<LinkShape>;
