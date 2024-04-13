import { toast } from "sonner";

export const copyToClipboard = (text: string): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast("Event has been created", {
        description: "Link copiado en el portapapeles",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    })
    .catch((err) => {
      console.error("Error copying to clipboard:", err);
    });
};
