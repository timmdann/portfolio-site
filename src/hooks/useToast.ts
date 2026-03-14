import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1_000_000;

type ToastVariant = "default" | "destructive";

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  action?: React.ReactNode;
}

interface ToastHandle {
  id: string;
  dismiss: () => void;
  update: (props: Partial<ToastProps>) => void;
}

type Action =
  | { type: "ADD_TOAST"; toast: ToastProps }
  | { type: "UPDATE_TOAST"; toast: Partial<ToastProps> & { id: string } }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

interface State {
  toasts: ToastProps[];
}

let count = 0;

function genId(): string {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function addToRemoveQueue(toastId: string): void {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: "REMOVE_TOAST", toastId });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => addToRemoveQueue(toast.id));
      }
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined ? { ...t, open: false } : t
        ),
      };
    }

    case "REMOVE_TOAST":
      if (action.toastId === undefined) return { ...state, toasts: [] };
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
}

const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };

function dispatch(action: Action): void {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

export function toast(props: Omit<ToastProps, "id">): ToastHandle {
  const id = genId();

  const update = (updated: Partial<ToastProps>) =>
    dispatch({ type: "UPDATE_TOAST", toast: { ...updated, id } });

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update };
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}
