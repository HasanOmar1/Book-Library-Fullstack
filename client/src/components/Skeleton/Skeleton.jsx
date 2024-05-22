import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SkeletonComp() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  let widthOfSkeleton;
  if (isSmallScreen) {
    widthOfSkeleton = 350;
  } else if (isMediumScreen) {
    widthOfSkeleton = 400;
  } else if (isLargeScreen) {
    widthOfSkeleton = 700;
  } else if (isXLargeScreen) {
    widthOfSkeleton = 1000;
  }

  return (
    <Stack spacing={3}>
      <Skeleton
        variant="rounded"
        width={widthOfSkeleton}
        height={300}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={widthOfSkeleton}
        height={300}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={widthOfSkeleton}
        height={300}
        animation="wave"
      />
    </Stack>
  );
}
