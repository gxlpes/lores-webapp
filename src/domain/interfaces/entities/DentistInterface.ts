import { Person } from "./PersonInterface";
import { Specialty } from "./SpecialtyInterface";

export interface Dentist {
  specialties: any;
  id: string;
  croNumber: string;
  person: Person;
}
