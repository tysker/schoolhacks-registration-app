type SignUpButtonProps = {
  handleClose: () => void;
};

function SignUpButton({ handleClose }: SignUpButtonProps) {
  return (
    <button
      onClick={handleClose}
      className="rounded-md bg-stone-500 p-2 font-extrabold text-white hover:bg-stone-300 active:bg-stone-300"
    >
      Sign Up
    </button>
  );
}

export default SignUpButton;
