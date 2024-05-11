export const isIOS = () => {
  if (
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !window.MSStream
  ) {
    return true;
  }
  return false; // Default to non-iOS for server-side rendering
};
