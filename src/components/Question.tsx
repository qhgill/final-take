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
          <AlertDialogDescription>Words to write later!</AlertDialogDescription>
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
