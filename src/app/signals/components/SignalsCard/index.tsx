import { CardContent, Card } from "@/components/ui/card";
import {
  FaArrowDown,
  FaArrowUp,
  FaRegClock,
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";
import { ISignal } from "../../interfaces/signals";

const SignalsCard = ({ signal }: { signal: ISignal }): JSX.Element => {
  return (
    <div className="my-8 w-10/12 md:w-8/12 lg:w-6/12 lg:grid-cols-1">
      <div className="space-y-4">
        <Card className="rounded-lg border-none">
          <CardContent className="flex items-center space-x-4 border-none shadow-sm shadow-slate-500 rounded-lg p-4">
            {signal.action === "Sell" ? (
              <FaArrowTrendDown className="h-6 w-6 text-red-600" />
            ) : (
              <FaArrowTrendUp className="h-6 w-6 text-green-400" />
            )}

            <div className="flex-1">
              <div className="font-medium text-white">
                {`${signal.action} ${signal.currency}`}{" "}
              </div>
              <div className="text-gray-500">
                {signal.description}
              </div>
            </div>
            {signal.status === "pending" ? (
              <FaRegClock className="h-9 w-9 p-2 text-amber-400 bg-yellow-100 rounded-full" />
            ) : signal.status === "won" ? (
              <FaArrowUp className="h-9 w-9 p-2 text-green-400 bg-green-100 rounded-full" />
            ) : (
              <FaArrowDown className="h-9 w-9 p-2 text-red-600 bg-red-100 rounded-full" />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignalsCard;
