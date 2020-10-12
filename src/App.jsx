import React, { useState } from "react";
import { Calendar } from "./Calendar";

import { AppTheme } from "./Theme";

export function App() {
  const [date, setDate] = useState(new Date());

  return (
    <AppTheme>
      <Calendar date={date} onChange={setDate} />
    </AppTheme>
  );
}
