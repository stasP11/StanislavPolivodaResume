export function Tag(props: any) {
  return (
    <div
      className="text-center font-medium sm:text-base text-sm min-w-[90px]
      bg-blue-500 text-white py-2 px-4 rounded-full font-bold inline-block
      hover:shadow-md transition duration-300"
    >
      {props.tagName}
    </div>
  );
}

export function Button({ onShow, status }: any) {
  return (
    <button
      onClick={onShow}
      className={`py-2 px-4 sm:text-base ${
        status ? "bg-red-400 " : "bg-green-400 "
      }text-white text-sm font-semibold rounded-full shadow-md
     focus:ring-opacity-75 min-w-[103px] ${
       status ? "hover:bg-red-500" : "hover:bg-green-500"
     }`}
    >
      {status ? "Hide" : "Show more"}
    </button>
  );
}

export function LicensesButton({ onShow, status }: any) {
  return (
    <button
      onClick={onShow}
      className={`py-2 px-4 sm:text-base ${
        status ? "bg-red-400 " : "bg-green-400 "
      }text-white text-sm font-semibold rounded-full shadow-md
   focus:ring-opacity-75 min-w-[103px] ${
     status ? "hover:bg-red-500" : "hover:bg-green-500"
   }`}
    >
      Show credential
    </button>
  );
}
