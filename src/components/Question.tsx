import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { FileQuestion } from "lucide-react";

const Quesiton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <FileQuestion className="size-15 cursor-pointer text-black hover:scale-95 duration-100" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Directions</AlertDialogTitle>
          <AlertDialogDescription>
            Make the best movie possible without going over your budget or
            harming the planet. Balance your financial, environmental, and
            creative choices in production to achieve box office success while
            being environmentally sustainable!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="cursor-pointer">
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Quesiton;
