import { useContext } from "react";
import { Context } from "../Context/Context";

export default function UseContext() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }

  return context;
}
