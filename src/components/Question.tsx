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

const Question = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <FileQuestion className="size-10 cursor-pointer text-white hover:scale-95 duration-100" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>How to Play</AlertDialogTitle>
          <AlertDialogDescription>
            Make the best movie possible without going over your budget or
            harming the planet. Balance your financial, environmental, and
            creative choices in production to achieve box office success while
            being environmentally sustainable!
            <br />
            <br />
            Hint: You get three favors to help increase your budget by 500K!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="text-xl cursor-pointer">
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Question;
