import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me re renderize");
  return <small>{value}</small>;
});
