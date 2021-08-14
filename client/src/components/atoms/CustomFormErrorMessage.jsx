export const CustomFormErrorMessage = ({ show, msg }) => {
  const visibility = show ? "visible" : "invisible";
  const errorMessage = msg || "-"; // Prevents form to jump up when error message is empty
  return <p className={`text-danger ${visibility}`}>{errorMessage}</p>;
};
