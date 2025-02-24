export default function CardGettingStartedItem({ children }) {
  return (
    <div
      className="p-2 rounded-2xl"
      style={{
        background: "linear-gradient(180deg, #1A262E 0%, #16232D 100%)",
      }}
    >
      {children}
    </div>
  );
}
