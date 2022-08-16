export interface Data {
  name?: string;
  company?: string;
  followers?: number;
  html_url?: string;
  avatar?: string;
}

export interface Repo {
  id?: number;
  name?: string;
  updated_at?: string;
  url?: string;
}

export type RepoItems = Array<Repo>;
