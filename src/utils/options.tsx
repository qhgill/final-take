import { StaticImageData } from "next/image";

interface Option {
  month: number;
  title: string;
  icon: StaticImageData;
  description: string;
  placeholder: string;
}
export default Option;
