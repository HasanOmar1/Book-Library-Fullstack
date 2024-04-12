import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonComp() {
  const widthOfSkeleton =
    window.innerWidth < 400
      ? 350
      : window.innerWidth < 450
      ? 400
      : window.innerWidth < 800
      ? 700
      : 1200;

  return (
    <Stack spacing={3}>
      <Skeleton variant="rounded" width={widthOfSkeleton} height={300} />
      <Skeleton variant="rounded" width={widthOfSkeleton} height={300} />
      <Skeleton variant="rounded" width={widthOfSkeleton} height={300} />
      <Skeleton variant="rounded" width={widthOfSkeleton} height={300} />
      <Skeleton variant="rounded" width={widthOfSkeleton} height={300} />
    </Stack>
  );
}
