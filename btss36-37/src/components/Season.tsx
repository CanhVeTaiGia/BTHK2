import { useState } from "react";

export default function Season() {
  const [season, setSeason] = useState<string>(() => {
    const today = new Date();
    if (today.getMonth() >= 1 && today.getMonth() <= 3) {
      return "Xuân";
    } else if (today.getMonth() >= 4 && today.getMonth() <= 6) {
      return "Hè";
    } else if (today.getMonth() >= 7 && today.getMonth() <= 9) {
      return "Thu";
    } else {
      return "Đông";
    }
  });
  const [month, setMonth] = useState<number>(() => {
    const today = new Date();
    return today.getMonth();
  });
  return (
    <>
      <p>Bây giờ là tháng: {month}</p>
      <p>Mùa hiện tại là mùa: {season}</p>
    </>
  );
}
