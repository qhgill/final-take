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

import { MessageCircleQuestion } from "lucide-react";

const Quesiton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer text-black flex items-center justify-center hover:scale-110 duration-100">
        <MessageCircleQuestion className="size-10" />
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
