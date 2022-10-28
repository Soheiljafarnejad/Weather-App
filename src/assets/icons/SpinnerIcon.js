const SpinnerIcon = ({ className }) => {
  return (
    <div
      className={`h-5 w-5 text-gray-400 border-4 rounded-full border-gray-400 animate-loading border-t-gray-600 border-l-gray-600 ${className}`}
    ></div>
  );
};

export default SpinnerIcon;
