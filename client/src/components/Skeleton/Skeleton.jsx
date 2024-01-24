import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonComp() {
  return (
    <Stack spacing={3}>
      <Skeleton variant="rounded" width={1200} height={300} />
      <Skeleton variant="rounded" width={1200} height={300} />
      <Skeleton variant="rounded" width={1200} height={300} />
      <Skeleton variant="rounded" width={1200} height={300} />
      <Skeleton variant="rounded" width={1200} height={300} />
      {/* <Skeleton variant="rectangular" width={310} height={100} /> */}
    </Stack>
  );
}
