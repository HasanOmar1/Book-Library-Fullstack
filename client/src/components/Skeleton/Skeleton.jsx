import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./Skeleton.css";

export default function SkeletonComp() {
  return (
    <Stack spacing={3}>
      <Skeleton variant="rounded" />
      <Skeleton variant="rounded" />
      <Skeleton variant="rounded" />
    </Stack>
  );
}
