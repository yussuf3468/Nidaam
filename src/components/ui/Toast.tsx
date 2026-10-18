import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CircleCheck, X } from 'lucide-react';

export interface ToastMessage {
  id: number;
  title: string;
  description?: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
  /** Auto-dismiss delay in ms. */
  duration?: number;
}

/** Top-centre success toast, rendered into <body> so it always uses the page theme. */
export function Toast({ toast, onDismiss, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(onDismiss, duration);
    return () => window.clearTimeout(timer);
  }, [toast, onDismiss, duration]);

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 top-[calc(env(safe-area-inset-top)+0.75rem)] z-[60] flex justify-center px-4"
    >
      {toast && (
        <div
          key={toast.id}
          className="pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl bg-popover p-3.5 text-popover-foreground shadow-lg ring-1 ring-foreground/10 motion-safe:animate-toast-in"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-300">
            <CircleCheck className="size-4" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="text-[15px] font-semibold leading-snug">{toast.title}</div>
            {toast.description && <p className="mt-0.5 truncate text-[13px] text-muted-foreground">{toast.description}</p>}
          </div>
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className="grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>,
    document.body,
  );
}
