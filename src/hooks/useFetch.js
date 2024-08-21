import { useEffect, useState } from "react";

export function useFetch(
  url,
  initialState,
  transform = (setState) => setState
) {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setState(transform(result)));
  }, []);

  return [state, setState];
}
