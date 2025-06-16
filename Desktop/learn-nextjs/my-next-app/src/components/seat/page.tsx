import React, { useState } from "react";
import "./SeatSelection.css";
import { useRouter } from "next/navigation";

const seatPrice: number = 45000;
const couplePrice: number = seatPrice * 2;

type SeatType = "standard" | "vip" | "couple" | null;

const seatMap: SeatType[][] = [
  Array(10).fill("standard"), // A
  Array(10).fill("standard"), // B

  [
    "standard",
    "standard",
    "vip",
    "vip",
    "vip",
    "vip",
    "vip",
    "vip",
    "standard",
    "standard",
  ],

  [
    "standard",
    "standard",
    "vip",
    "vip",
    "vip",
    "vip",
    "vip",
    "vip",
    "standard",
    "standard",
  ],

  [
    "standard",
    "standard",
    "vip",
    "vip",
    "vip",
    "vip",
    "vip",
    "vip",
    "standard",
    "standard",
  ],
  // E: Couple
  [
    null,
    "couple",
    "couple",
    null,
    "couple",
    "couple",
    null,
    "couple",
    "couple",
    null,
  ],
];

const rowLabels: string[] = ["A", "B", "C", "D", "F", "E"];
const colLabels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const occupiedSeats: string[] = [];

function getSeatType(rowIdx: number, colIdx: number): SeatType {
  return seatMap[rowIdx][colIdx];
}

function getSeatId(rowIdx: number, colIdx: number): string {
  return rowLabels[rowIdx] + colLabels[colIdx];
}

const seatTypeToClass: Record<string, string> = {
  standard: "seat-standard",
  vip: "seat-vip",
  couple: "seat-couple",
  selected: "seat-selected",
  occupied: "seat-occupied",
};

const seatTypeToLabel: Record<string, string> = {
  standard: "Standard",
  vip: "VIP",
  couple: "Couple",
};

const seatTypeToPrice: Record<string, number> = {
  standard: seatPrice,
  vip: seatPrice,
  couple: couplePrice,
};

const SeatSelection: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const router = useRouter();

  const handleSeatClick = (rowIdx: number, colIdx: number): void => {
    const seatType = getSeatType(rowIdx, colIdx);
    if (!seatType) return;
    const seatId = getSeatId(rowIdx, colIdx);
    if (occupiedSeats.includes(seatId)) return;
    
    // Nếu là couple, chọn/bỏ chọn cả cặp
    if (seatType === "couple") {
      // Tìm cặp ghế (liền kề trái/phải)
      let pairIdx: number | null = null;
      // Kiểm tra ghế bên phải
      if (colIdx < 9 && getSeatType(rowIdx, colIdx + 1) === "couple") {
        pairIdx = colIdx + 1;
      }
      // Kiểm tra ghế bên trái
      if (colIdx > 0 && getSeatType(rowIdx, colIdx - 1) === "couple") {
        pairIdx = colIdx - 1;
      }
      const pairId = pairIdx !== null ? getSeatId(rowIdx, pairIdx) : null;

      if (!pairId) return; // Nếu không tìm thấy cặp ghế, không làm gì cả

      setSelectedSeats((prev) => {
        // Kiểm tra xem có ghế nào trong cặp đã được chọn chưa
        const isAnySelected = prev.includes(seatId) || prev.includes(pairId);
        
        if (isAnySelected) {
          // Nếu có ghế đã được chọn, huỷ chọn cả cặp
          return prev.filter(s => s !== seatId && s !== pairId);
        } else {
          // Nếu chưa có ghế nào được chọn, thêm cả cặp vào
          let newSeats = prev.filter(s => s !== seatId && s !== pairId);
          newSeats.push(seatId);
          newSeats.push(pairId);
          return newSeats;
        }
      });
      return;
    }
    
    // Ghế thường
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  // Tính tổng tiền
  const total = selectedSeats.reduce((sum, seatId) => {
    const rowIdx = rowLabels.indexOf(seatId[0]);
    const colIdx = parseInt(seatId.slice(1)) - 1;
    const type = getSeatType(rowIdx, colIdx);
    return sum + (type === "couple" ? couplePrice : seatPrice);
  }, 0);

  return (
    <div className="seat-selection-container dark-theme">
      <h2 className="seat-title">Select Seat</h2>
      <div className="screen-compact">
        <div className="screen-label">Screen</div>
        <div className="screen-bar"></div>
      </div>
      <div className="seat-legend">
        <div className="legend-item">
          <div className="seat seat-standard"></div> <span>Standard</span>
        </div>
        <div className="legend-item">
          <div className="seat seat-vip"></div> <span>VIP</span>
        </div>
        <div className="legend-item">
          <div className="seat seat-couple"></div> <span>Couple</span>
        </div>
        <div className="legend-item">
          <div className="seat seat-selected"></div> <span>Selected</span>
        </div>
        <div className="legend-item">
          <div className="seat seat-occupied"></div> <span>Booked</span>
        </div>
      </div>
      <div className="seat-grid">
        {seatMap.map((row, rowIdx) => (
          <div key={rowLabels[rowIdx]} className="seat-row">
            <span className="row-label">{rowLabels[rowIdx]}</span>
            {row.map((type, colIdx) => {
              if (!type) return <div key={colIdx} className="seat-empty" />;
              const seatId = getSeatId(rowIdx, colIdx);
              let seatClass = seatTypeToClass[type];
              if (occupiedSeats.includes(seatId))
                seatClass = seatTypeToClass["occupied"];
              if (selectedSeats.includes(seatId))
                seatClass = seatTypeToClass["selected"];
              return (
                <button
                  key={seatId}
                  className={`seat ${seatClass}`}
                  onClick={() => handleSeatClick(rowIdx, colIdx)}
                  disabled={occupiedSeats.includes(seatId)}
                  title={`${seatId} - ${seatTypeToLabel[type]} - ${
                    type === "couple"
                      ? couplePrice.toLocaleString()
                      : seatPrice.toLocaleString()
                  } VNĐ`}
                >
                  {seatId}
                </button>
              );
            })}
            <span className="row-label">{rowLabels[rowIdx]}</span>
          </div>
        ))}
      </div>
      <div className="selected-seats-info dark-info">
        <h3>
          Selected Seat: {selectedSeats.join(", ") || "No seats selected yet"}
        </h3>
        {selectedSeats.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: 8,
            }}
          >
            <div className="total-price">
              Total:{" "}
              <span className="total-price-value">
                {total.toLocaleString()} VNĐ
              </span>
            </div>
            <button
              style={{
                background: "#e53955",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "10px 28px",
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
                marginLeft: 12,
                boxShadow: "0 2px 8px rgba(229,57,85,0.15)",
              }}
              onClick={() => {
                localStorage.removeItem("hold_start_time");
                router.push("/booking/food");
              }}
            >
              Continue Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelection; 