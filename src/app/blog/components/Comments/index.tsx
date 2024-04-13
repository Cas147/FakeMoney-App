import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { PostComment } from "../../interfaces/blog";

const PostComments = ({
  comments,
}: {
  comments: PostComment[];
}): JSX.Element => {
  return (
    <>
      <div className="w-full max-w-3xl">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <p className="text-sm leading-none text-gray-500 dark:text-gray-400 mt-2">
              Tu dirección de correo electrónico no será publicada. Los campos
              obligatorios están marcados con
              <span className="text-red-400">*</span>
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-sm text-white" htmlFor="comment">
                Comentario
                <span className="text-red-400">*</span>
              </Label>
              <Textarea
                className="min-h-[100px] resize-none border-white text-white"
                id="comment"
                required
              />
            </div>
            <Button
              type="submit"
              className="relative p-2 text-sm font-medium text-centerinline-flex items-center border border-amber-400 justify-center mb-2 me-2 overflow-hidden rounded-lg group bg-gradient-to-br hover:from-amber-300 hover:to-orange-600  text-white"
            >
              Publicar Comentario
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid gap-6">
          <h2 className="font-semibold text-xl text-amber-400">
            5 Comentarios
          </h2>
          {comments.map((comment: PostComment, index: number) => (
            <div key={comment.id} className="text-sm flex items-start gap-4">
              <Avatar className="w-10 h-10 border bg-amber-400 text-white">
                <AvatarImage alt={comment.user} src="/placeholder-user.jpg" />
                <AvatarFallback>{comment.user}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-white">{comment.user}</div>
                  <div className="text-gray-500 text-xs dark:text-gray-400">
                    {comment.date}
                  </div>
                </div>
                <div className="text-gray-400">{comment.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostComments;
