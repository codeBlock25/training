import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// https://localhost:40000/?name="amos"

export function useUrl<TState>(
  state_name: string,
  init?: TState
): [TState | undefined, (value: TState) => void] {
  const { search } = useLocation();
  const [getter, setter] = useState<TState | undefined>(undefined);

  const params = new URLSearchParams(search);

  useEffect(() => {
    setter(init);
    const value = params.get(state_name);
    if (!value) {
      params.set(state_name, init ? JSON.stringify(init) : "");
      window.history.replaceState({}, "", `?${params.toString()}`);
    } else {
      switch (true) {
        case value === null:
          setter(init ?? undefined);
          break;
        case value?.toLowerCase() === "true" ||
          value?.toLowerCase() === "false":
          setter((value?.toLowerCase() === "true" ? true : false) as TState);
          break;
        case !isNaN(Number(value)):
          setter(Number(value) as TState);
          break;
        default:
          try {
            setter(JSON.parse(value) as TState);
          } catch (error) {
            setter(value as TState);
          }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state_name, init]);

  if (!state_name) throw new Error("state_name not provided");

  function setState(value: TState) {
    setter(value);
    params.set(
      state_name,
      typeof value === "string" ? value : (JSON.stringify(value) as string)
    );
    window.history.replaceState({}, "", `?${params.toString()}`);
  }

  return [getter, setState] as const;
}
