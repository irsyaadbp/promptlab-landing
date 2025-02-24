export default function CircularItem({ children }) {
  return (
    <div
      className="rounded-full "
      style={{
        background: "#021921",
        boxShadow: "0px 0px 4px 1px #9BC18E40",
        padding: "14px",
      }}
    >
      {children}
    </div>
  );
}
