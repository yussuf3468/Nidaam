import { useCallback, useId, useState, type ChangeEvent, type FormEvent } from 'react';
import { LoaderCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Toast, type ToastMessage } from './ui/Toast';
import { isValidEmail, subscribe } from '../lib/subscribe';
import { cn } from '../lib/cn';

type Status = 'idle' | 'loading' | 'error';

const HELPER = 'No spam. One email at launch, and the odd update.';

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const inputId = useId();
  const hintId = useId();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const isLoading = status === 'loading';
  const isError = status === 'error';
  const dismissToast = useCallback(() => setToast(null), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) return;

    const value = email.trim();
    if (!isValidEmail(value)) {
      setStatus('error');
      setError('Enter an email address like name@company.com.');
      return;
    }

    setStatus('loading');
    try {
      await subscribe(value);
      setStatus('idle');
      setEmail('');
      setToast({ id: Date.now(), title: "You're on the list", description: `We'll write to ${value} when we launch.` });
    } catch {
      setStatus('error');
      setError("We couldn't save that just now. Please try again.");
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    if (isError) {
      setStatus('idle');
      setError('');
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className={cn('w-full', className)}>
      <label htmlFor={inputId} className="text-sm font-medium">
        Email address
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          placeholder="name@company.com"
          value={email}
          onChange={handleChange}
          readOnly={isLoading}
          aria-invalid={isError}
          aria-describedby={hintId}
          className="h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-3.5 text-[15px] text-foreground outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30"
        />
        <Button type="submit" size="xl" disabled={isLoading} className="w-full sm:w-auto">
          {isLoading && <LoaderCircle className="animate-spin" aria-hidden="true" />}
          {isLoading ? 'Saving…' : 'Stay updated'}
        </Button>
      </div>
      <p
        id={hintId}
        role="status"
        aria-live="polite"
        className={cn('mt-2 min-h-5 text-[13px]', isError ? 'text-destructive' : 'text-muted-foreground')}
      >
        {isError ? error : HELPER}
      </p>

      <Toast toast={toast} onDismiss={dismissToast} />
    </form>
  );
}
