export function useGeo() {
  const getLocation = () =>
    navigator.geolocation.getCurrentPosition(() => {});
  return { getLocation };
}
