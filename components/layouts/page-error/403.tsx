import { KeySquare } from "lucide-react";

export const AccessDenied = () => {
  return (
    
      <div className="flex flex-col items-center justify-center h-[80%]  space-y-8">
          <KeySquare className=" size-15 text-amber-500"/>
          <div>
          <h1 className="text-3xl font-bold text-center text-gray-700">Access denied</h1>
          <p className="text-xl text-center mt-3 font-medium text-gray-500">
            You tried to access a page you did not have permission.
          </p>
          </div>
        </div>
    
    
  );
};
export default AccessDenied;
