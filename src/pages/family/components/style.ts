export const styleWrapper: React.CSSProperties = {
  zIndex: 1,
  position: "absolute",
  backgroundColor: "black",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 0.5,
};

export const styleWindow: React.CSSProperties = {
  zIndex: 2,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#000000",
  backgroundColor: "#ffffff",
  padding: "25px",
  borderRadius: "16px",
};

export const styleCross: React.CSSProperties = {
  color: "#E1F0F0",
  position: "absolute",
  top: 20,
  right: 20,
  fontSize: "28px",
  cursor: "pointer",
};

export const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  marginBottom: "10px",
};

export const buttonWraper: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};