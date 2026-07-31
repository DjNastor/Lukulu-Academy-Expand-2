import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  AlertCircleIcon,
  ArrowUpRightIcon,
  CheckCircle2Icon,
  LoaderCircleIcon,
  MailIcon,
  SendIcon,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

type Service = { value: string; label: string };
type Category = { value: string; label: string; services: Service[] };

const enquiryCategories: Category[] = [
  {
    value: 'academy',
    label: 'Academy',
    services: [
      { value: 'course-advice', label: 'Course advice' },
      { value: 'remote-course', label: 'Remote course enrolment' },
      { value: 'reason-certificate', label: 'Reason 14 certificate' },
      { value: 'fl-studio', label: 'FL Studio course' },
      { value: 'cubase', label: 'Cubase course' },
      { value: 'music-business', label: 'Music business course' },
      { value: 'basic', label: 'Basic membership' },
      { value: 'pro', label: 'Pro membership' },
      { value: 'vip', label: 'VIP membership' },
      { value: 'billing-help', label: 'Academy billing help' },
      { value: 'student-support', label: 'Student support' },
    ],
  },
  {
    value: 'accounts',
    label: 'Academy accounts',
    services: [
      { value: 'payment-help', label: 'Academy payment help' },
      { value: 'subscription-help', label: 'Membership help' },
      { value: 'receipt-invoice', label: 'Receipt or invoice' },
    ],
  },
];

type EnquiryFormState = {
  name: string;
  email: string;
  phone: string;
  category: string;
  service: string;
  message: string;
  referenceUrl: string;
  preferredDate: string;
  company: string;
};

type SubmissionState =
  | { kind: 'idle' }
  | { kind: 'pending' }
  | { kind: 'success'; referenceId: string }
  | { kind: 'error'; message: string; code?: string };

type EnquiryFormProps = {
  initialCategory?: string;
  initialService?: string;
  compact?: boolean;
};

const blankForm: EnquiryFormState = {
  name: '',
  email: '',
  phone: '',
  category: '',
  service: '',
  message: '',
  referenceUrl: '',
  preferredDate: '',
  company: '',
};

function validSelection(categoryValue: string, serviceValue: string) {
  const category = enquiryCategories.find((item) => item.value === categoryValue);
  return {
    category: category?.value ?? '',
    service: category?.services.some((item) => item.value === serviceValue) ? serviceValue : '',
  };
}

export function EnquiryForm({ initialCategory = '', initialService = '', compact = false }: EnquiryFormProps) {
  const location = useLocation();
  const [form, setForm] = useState<EnquiryFormState>(() => ({
    ...blankForm,
    ...validSelection(initialCategory, initialService),
  }));
  const [submission, setSubmission] = useState<SubmissionState>({ kind: 'idle' });

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const selected = validSelection(
      query.get('category') ?? initialCategory,
      query.get('service') ?? initialService,
    );
    const courseName = (query.get('course') ?? '').trim().slice(0, 120);
    setForm((current) => ({
      ...current,
      ...selected,
      message: courseName && !current.message.trim()
        ? `I'm interested in the ${courseName} remote course. Please send me the next available intake and enrolment details.`
        : current.message,
    }));
  }, [initialCategory, initialService, location.search]);

  const category = enquiryCategories.find((item) => item.value === form.category);
  const referenceLabel = 'Course, student or reference URL';
  const contactHref = useMemo(() => {
    const categoryLabel = category?.label ?? 'General';
    const serviceLabel = category?.services.find((item) => item.value === form.service)?.label ?? 'Not selected';
    const body = [
      `Name: ${form.name || 'Not provided'}`,
      `Email: ${form.email || 'Not provided'}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Category: ${categoryLabel}`,
      `Service: ${serviceLabel}`,
      `Reference URL: ${form.referenceUrl || 'Not provided'}`,
      '',
      form.message || 'Please help me with this enquiry.',
    ].join('\n');
    return `mailto:lukulurecordings@gmail.com?subject=${encodeURIComponent(`Lukulu Academy enquiry — ${serviceLabel}`)}&body=${encodeURIComponent(body)}`;
  }, [category, form]);

  const updateField = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSubmission({ kind: 'idle' });
    setForm((current) => {
      if (name === 'category') return { ...current, category: value, service: '' };
      return { ...current, [name]: value };
    });
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submission.kind === 'pending') return;
    setSubmission({ kind: 'pending' });

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await response.json().catch(() => ({}))) as {
        referenceId?: unknown;
        error?: string;
        message?: string;
        code?: string;
      };

      if (response.ok && typeof data.referenceId === 'string' && data.referenceId.trim()) {
        setSubmission({ kind: 'success', referenceId: data.referenceId.trim() });
        return;
      }

      throw Object.assign(
        new Error(data.error || data.message || 'The enquiry could not be saved.'),
        { code: data.code },
      );
    } catch (error) {
      const code = error && typeof error === 'object' && 'code' in error
        ? String(error.code)
        : undefined;
      const isSetupError = code === 'ENQUIRIES_NOT_CONFIGURED' || code === 'PERSISTENCE_NOT_CONFIGURED';
      setSubmission({
        kind: 'error',
        code,
        message: isSetupError
          ? 'Secure enquiry storage is still being connected. Use the prepared email below so the team can help now.'
          : 'We could not save this enquiry. Please try again, or use the prepared email below.',
      });
    }
  };

  return (
    <form className={`enquiry-form ${compact ? 'enquiry-form--compact' : ''}`} onSubmit={submit}>
      <div className="enquiry-form__signal">
        <SendIcon aria-hidden="true" />
        <div><p className="console-label">ACADEMY INTAKE</p><h2>Tell us what you want to learn</h2></div>
      </div>

      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" value={form.name} onChange={updateField} autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={form.email} onChange={updateField} autoComplete="email" required />
        </label>
        <label>
          <span>Phone <small>(optional)</small></span>
          <input type="tel" name="phone" value={form.phone} onChange={updateField} autoComplete="tel" inputMode="tel" />
        </label>
        <label>
          <span>Academy area</span>
          <select name="category" value={form.category} onChange={updateField} required>
            <option value="">Choose a category</option>
            {enquiryCategories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
        </label>
        <label className="form-span">
          <span>Support type</span>
          <select name="service" value={form.service} onChange={updateField} required disabled={!category}>
            <option value="">{category ? 'Choose a support type' : 'Choose an academy area first'}</option>
            {category?.services.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
        </label>
        <label className="form-span">
          <span>{referenceLabel} <small>(optional)</small></span>
          <input type="url" name="referenceUrl" value={form.referenceUrl} onChange={updateField} placeholder="https://" />
        </label>
        <label className="form-span">
          <span>Message</span>
          <textarea name="message" rows={compact ? 4 : 6} value={form.message} onChange={updateField} required minLength={20} placeholder="Add the details the team should know (at least 20 characters)." />
        </label>
        <label className="enquiry-honeypot" aria-hidden="true">
          Company
          <input name="company" value={form.company} onChange={updateField} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" className="button button-primary button-full" disabled={submission.kind === 'pending'}>
        {submission.kind === 'pending' ? <LoaderCircleIcon className="spin" aria-hidden="true" /> : <SendIcon aria-hidden="true" />}
        {submission.kind === 'pending' ? 'Saving enquiry…' : 'Send secure enquiry'}
      </button>

      <div className="enquiry-form__status" role="status" aria-live="polite">
        {submission.kind === 'success' && (
          <div className="status-panel status-panel--success">
            <CheckCircle2Icon aria-hidden="true" />
            <div><strong>Enquiry saved</strong><p>Your reference is <code>{submission.referenceId}</code>. Keep it for follow-up.</p></div>
          </div>
        )}
        {submission.kind === 'error' && (
          <div className="status-panel status-panel--error">
            <AlertCircleIcon aria-hidden="true" />
            <div>
              <strong>Online handoff unavailable</strong>
              <p>{submission.message}</p>
              <a href={contactHref}><MailIcon aria-hidden="true" /> Open prepared email <ArrowUpRightIcon aria-hidden="true" /></a>
            </div>
          </div>
        )}
      </div>
      <p className="enquiry-form__privacy">Your details are used only to answer this enquiry. A confirmation appears only after the server returns a saved reference.</p>
    </form>
  );
}
