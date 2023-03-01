export type TreeDTO = {
  name: string;
  id: number;
  children: [{ name: string; id: string; children: TreeDTO[] }];
};
