import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const NewContentDialog = ({
  content,
  title,
}: {
  content: string;
  title: string;
}): JSX.Element => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-amber-300 to-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
          Leer
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[425px] w-auto snap-y text-white bg-black">
        <DialogHeader>
          <DialogTitle className="text-amber-400 mb-2">{title}</DialogTitle>
          <DialogDescription className="text-white">
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewContentDialog;
