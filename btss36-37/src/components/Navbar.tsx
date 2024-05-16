import { useState } from "react";

interface Tab {
  id: number;
  name: string;
  active: boolean;
}
export default function Navbar() {
  const [changeTab, setChangeTab] = useState<Tab[]>([
    { id: 1, name: "Trang chủ", active: true },
    { id: 2, name: "Sản phẩm", active: false },
    { id: 3, name: "Giới thiệu", active: false },
    { id: 4, name: "Liên hệ", active: false },
  ]);
  const handleClick = (id: number) => {
    const newTabs = changeTab.map(tab => ({
      ...tab,
      active: tab.id === id
    }));
    setChangeTab(newTabs);
  };
  return (
    <>
      <div style={{display: 'flex', gap: '10px'}}>
        {changeTab.map((e) => {
          return (
            <div onClick={() => handleClick(e.id)} className={e.active ? "active tab" : "tab"}>{e.name}</div>
          );
        })}
      </div>
    </>
  );
}
