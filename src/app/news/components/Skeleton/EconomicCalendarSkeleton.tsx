const EconomicCalendarSkeleton = (): JSX.Element => {
  return (
    <div className="gap-6">
      {[...Array(3)].map(() => (
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
      ))}
    </div>
  );
};

export default EconomicCalendarSkeleton;
