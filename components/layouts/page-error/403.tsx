export const AccessDeniedPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen gap-12 py-8 ">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-medium text-center">Access denied</h1>
          <p className="text-xl text-center ">
            You tried to access a page you did not have permission.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AccessDeniedPage;
