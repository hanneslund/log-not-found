"use client";

import { notFound } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [nf, setNf] = useState(false);
  const [err, setErr] = useState(false);
  if (nf) {
    notFound();
  }
  if (err) {
    throw new Error("random error");
  }
  return (
    <>
      <button onClick={() => setNf(true)}>not found</button>
      <button onClick={() => setErr(true)}>throw random error</button>
    </>
  );
}
