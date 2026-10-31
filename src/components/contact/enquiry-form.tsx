'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm, type UseFormRegister } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, m } from 'motion/react';
import { CircleCheck, LoaderCircle, Mail, TriangleAlert } from 'lucide-react';
import { submitEnquiry } from '@/app/contact/actions';
import { WhatsAppIcon } from '@/components/brand/social-icons';
import { Button, ButtonArrow } from '@/components/ui/button';
import { FieldError, Input, Label, Select, Textarea } from '@/components/ui/form-controls';
import {
  budgets,
  companySizes,
  contactMethods,
  enquirySchema,
  formatEnquiry,
  projectTypes,
  timelines,
  type EnquiryInput,
} from '@/lib/enquiry';
import { site, whatsappUrl } from '@/content/site';
import { cn } from '@/lib/utils';

/** Radio options rendered as selectable chips. */
function ChoiceGroup({
  name,
  legend,
  options,
  register,
  error,
}: {
  name: 'budget' | 'timeline' | 'preferredContact';
  legend: string;
  options: readonly string[];
  register: UseFormRegister<EnquiryInput>;
  error?: string;
}) {
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="text-sm font-semibold">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input type="radio" value={option} className="peer sr-only" {...register(name)} />
            <span
              className={cn(
                'inline-flex items-center rounded-full border border-input bg-card px-4 py-2 text-sm font-medium transition-colors',
                'hover:border-border-strong peer-checked:border-foreground peer-checked:bg-foreground peer-checked:text-background',
                'peer-focus-visible:ring-4 peer-focus-visible:ring-brand/25',
              )}
            >
              {option}
            </span>
          </label>
        ))}
      </div>
      <div className="mt-2">
        <FieldError id={`${name}-error`} message={error} />
      </div>
    </fieldset>
  );
}

export function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState('');
  // Filled when online sending is not configured: the same enquiry, ready for WhatsApp or email.
  const [handoff, setHandoff] = useState<{ whatsapp: string; email: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      discoveryCall: false,
      companySize: '',
      projectType: '',
      budget: '',
      timeline: '',
      preferredContact: 'Email',
      website: '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError('');
    setHandoff(null);
    const result = await submitEnquiry(values);
    if (result.ok) {
      setStatus('sent');
      reset();
    } else {
      setStatus('error');
      setServerError(result.error);
      if (result.notConfigured) {
        const text = formatEnquiry(values);
        setHandoff({
          whatsapp: `${whatsappUrl}?text=${encodeURIComponent(`Hello Nidaam Solutions, here is my project enquiry.\n\n${text}`)}`,
          email: `mailto:${site.contact.email}?subject=${encodeURIComponent(`Project enquiry from ${values.name}`)}&body=${encodeURIComponent(text)}`,
        });
      }
    }
  });

  const describe = (field: keyof EnquiryInput) => (errors[field] ? { 'aria-invalid': true, 'aria-describedby': `${field}-error` } : {});

  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'sent' ? (
          <m.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[32rem] flex-col items-start justify-center"
            role="status"
          >
            <span className="grid size-14 place-items-center rounded-full bg-success/15 text-success">
              <CircleCheck className="size-7" aria-hidden />
            </span>
            <h2 className="mt-6 text-xl font-bold tracking-tight sm:text-3xl">Thank you. Your enquiry is with us.</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We will review the details and come back to you with next steps. If it is urgent, WhatsApp is the fastest way to reach us.
            </p>
            <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>
              Send another enquiry
            </Button>
          </m.div>
        ) : (
          <m.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} noValidate className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Project enquiry</h2>
              <p className="mt-2 text-muted-foreground">Fields marked * are required. It takes about three minutes.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name *</Label>
                <Input id="name" autoComplete="name" {...register('name')} {...describe('name')} />
                <FieldError id="name-error" message={errors.name?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" autoComplete="email" {...register('email')} {...describe('email')} />
                <FieldError id="email-error" message={errors.email?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone or WhatsApp</Label>
                <Input id="phone" type="tel" autoComplete="tel" placeholder="+254 7XX XXX XXX" {...register('phone')} {...describe('phone')} />
                <FieldError id="phone-error" message={errors.phone?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Organisation</Label>
                <Input id="company" autoComplete="organization" {...register('company')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companySize">Organisation size</Label>
                <Select id="companySize" defaultValue="" {...register('companySize')} {...describe('companySize')}>
                  <option value="">
                    Choose one
                  </option>
                  {companySizes.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </Select>
                <FieldError id="companySize-error" message={errors.companySize?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectType">Project type</Label>
                <Select id="projectType" defaultValue="" {...register('projectType')} {...describe('projectType')}>
                  <option value="">
                    Choose one
                  </option>
                  {projectTypes.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </Select>
                <FieldError id="projectType-error" message={errors.projectType?.message} />
              </div>
            </div>

            <ChoiceGroup name="budget" legend="Estimated budget (optional)" options={budgets} register={register} error={errors.budget?.message} />
            <ChoiceGroup name="timeline" legend="When would you like to start? (optional)" options={timelines} register={register} error={errors.timeline?.message} />

            <div className="space-y-2">
              <Label htmlFor="message">What would you like to achieve? *</Label>
              <Textarea
                id="message"
                placeholder="Describe the problem, who uses the current process, and what success would look like."
                {...register('message')}
                {...describe('message')}
              />
              <FieldError id="message-error" message={errors.message?.message} />
            </div>

            <div className="grid gap-6 rounded-2xl border border-border bg-background/60 p-5 sm:grid-cols-2 sm:p-6">
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1 size-4 accent-[#00AEFF]" {...register('discoveryCall')} />
                <span>
                  <span className="block font-semibold">Request a discovery call</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">A 30-minute call to understand your goals and answer questions.</span>
                </span>
              </label>
              <ChoiceGroup name="preferredContact" legend="Preferred contact" options={contactMethods} register={register} />
            </div>

            {/* Honeypot */}
            <div className="hidden" aria-hidden>
              <label>
                Website
                <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
              </label>
            </div>

            <div className="space-y-2">
              <label className="flex cursor-pointer items-start gap-3 text-sm">
                <input type="checkbox" className="mt-0.5 size-4 accent-[#00AEFF]" {...register('consent')} {...describe('consent')} />
                <span className="text-muted-foreground">
                  I agree that Nidaam Solutions may use these details to respond to my enquiry, as described in the{' '}
                  <Link href="/privacy" className="font-semibold text-foreground underline underline-offset-4">
                    privacy policy
                  </Link>
                  . *
                </span>
              </label>
              <FieldError id="consent-error" message={errors.consent?.message} />
            </div>

            {status === 'error' && serverError && !handoff && (
              <p role="alert" className="flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm">
                <TriangleAlert className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
                {serverError}
              </p>
            )}

            {handoff && (
              <div role="alert" className="rounded-2xl border border-border bg-background p-5">
                <p className="text-sm text-muted-foreground">{serverError}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild size="sm" className="bg-[#25D366] text-white hover:bg-[#25D366]/90">
                    <a href={handoff.whatsapp} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="size-4" />
                      Send on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="secondary">
                    <a href={handoff.email}>
                      <Mail className="size-4" aria-hidden />
                      Send by email
                    </a>
                  </Button>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">We reply by your preferred channel. No spam, ever.</p>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" aria-hidden />
                    Sending
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ButtonArrow />
                  </>
                )}
              </Button>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
