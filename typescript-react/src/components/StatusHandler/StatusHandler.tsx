export const StatusHandler = ({ status }: { status: string }) => {
  return status === 'error' ? (
    <p>Something went wrong, please reload the page or contact support.</p>
  ) : (
    <p>Loading...</p>
  );
};
