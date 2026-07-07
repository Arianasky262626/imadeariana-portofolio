type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-lime-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105">
      {children}
    </button>
  );
}