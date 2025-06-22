"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FoodItem {
  id: number;
  name: string;
  image: string;
  price: number;
}

const foodList: FoodItem[] = [
  {
    id: 1,
    name: "Combo Single PopCorn Sweet  32Oz - Pepsi 22Oz",
    image: "/PopDrink1.jpg",
    price: 85000,
  },
  {
    id: 2,
    name: "Combo Couple PopCorn Sweet  32Oz - Pepsi 22Oz",
    image: "/PopDrink2.jpg",
    price: 120000,
  },
  {
    id: 3,
    name: "Pepsi 22Oz",
    image: "/drink1.jpg",
    price: 40000,
  },
  {
    id: 4,
    name: "PopCorn Sweet  320z",
    image: "/pop1.jpg",
    price: 60000,
  },
];

const FoodSelection: React.FC = () => {
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});
  const router = useRouter();

  const handleChange = (id: number, delta: number) => {
    setQuantities((prev) => {
      const newQty = (prev[id] || 0) + delta;
      return { ...prev, [id]: newQty < 0 ? 0 : newQty };
    });
  };

  const handleContinue = () => {
    // Lưu thông tin món đã chọn vào localStorage (hoặc context tuỳ ý bạn)
    localStorage.setItem("selected_food", JSON.stringify(quantities));
    router.push("/booking/confirmation");
  };

  // Lấy danh sách món đã chọn
  const selectedItems = foodList.filter(item => (quantities[item.id] || 0) > 0);

  // Tính tổng tiền
  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + (item.price * (quantities[item.id] || 0)),
    0
  );

  return (
    <div style={{ maxWidth: 850, margin: "40px auto" }}>
      <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 700, fontSize: 28, marginBottom: 24 }}>Add Food</h2>
      <div
        style={{
          border: "2px solid #e53955",
          borderRadius: 20, 
          padding: 24,
          boxSizing: "border-box",
          background: "transparent",
        }}
      >
        <table
          className="dark-info"
          style={{
            width: "100%",
            borderRadius: 16,
            padding: 0,
            borderCollapse: "separate",
            borderSpacing: 0,
            background: "transparent",
          }}
        >
          <thead>
            <tr>
              <th style={{ color: "#fff", fontWeight: 700, padding: 12, textAlign: "left" }}>Food and Drink list</th>
              <th style={{ color: "#fff", fontWeight: 700, padding: 12 }}>Price</th>
              <th style={{ color: "#fff", fontWeight: 700, padding: 12 }}>Quantity</th>

            </tr>
          </thead>
          <tbody>
            {foodList.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #333" }}>
                <td style={{ display: "flex", alignItems: "center", gap: 12, padding: 12 }}>
                  <img src={item.image} alt={item.name} style={{ width: 48, height: 48, objectFit: "contain" }} />
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>{item.name}</span>
                </td>
                <td style={{ color: "#e53955", fontWeight: 700, fontSize: 16, padding: 12 }}>
                  {item.price.toLocaleString()} VND
                </td>
                <td style={{ color: "#fff", fontWeight: 700, fontSize: 16, padding: 12, textAlign: "center" }}>
                  {quantities[item.id] || 0}
                </td>
                <td style={{ padding: 12 }}>
                  <button onClick={() => handleChange(item.id, -1)} style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "#e0e0e0", fontSize: 20, fontWeight: 700, cursor: "pointer", marginRight: 8 }}>-</button>
                  <button onClick={() => handleChange(item.id, 1)} style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "#7bc043", color: "#fff", fontSize: 20, fontWeight: 700, cursor: "pointer" }}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Hiển thị thông tin món đã chọn */}
        {selectedItems.length > 0 && (
          <div
            style={{
              marginTop: 32,
              background: "#232323",
              borderRadius: 12,
              padding: 20,
              color: "#fff",
              fontWeight: 500,
            }}
          >
            <div style={{ marginBottom: 12, fontWeight: 700, fontSize: 18 }}>
              Selected:
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {selectedItems.map(item => (
                <li key={item.id} style={{ marginBottom: 8 }}>
                  {item.name} x {quantities[item.id]}{" "}
                  <span style={{ color: "#e53955", fontWeight: 700 }}>
                    ({(item.price * (quantities[item.id] || 0)).toLocaleString()} VND)
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 12, fontWeight: 700, fontSize: 18 }}>
              Total:{" "}
              <span style={{ color: "#e53955" }}>
                {totalPrice.toLocaleString()} VND
              </span>
            </div>
          </div>
        )}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button
            onClick={handleContinue}
            style={{
              background: "#e53955",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 36px",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(229,57,85,0.15)",
            }}
          >
           <Link href='confirmation'>Continute Booking</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodSelection; 