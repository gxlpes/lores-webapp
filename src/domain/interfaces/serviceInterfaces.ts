export interface IServiceMethods {
  getAllMethodItems: () => void;
  deleteMethodItem: (id: string) => void;
  saveMethodItem: (e: React.FormEvent<HTMLFormElement>) => void;
  updateMethodItem?: (id: string) => void;
}
