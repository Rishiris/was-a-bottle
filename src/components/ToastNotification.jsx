import React from "react";
import { useCart } from "../context/CartContext";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export function ToastNotification() {
  const { toast } = useCart();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="toast-icon success" size={20} />,
    error: <AlertCircle className="toast-icon error" size={20} />,
    info: <Info className="toast-icon info" size={20} />
  };

  return (
    <div className={`toast-container type-${toast.type}`}>
      {icons[toast.type] || icons.success}
      <span className="toast-message">{toast.message}</span>
    </div>
  );
}
