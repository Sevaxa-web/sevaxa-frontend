type FormFieldProps = {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  isMessage?: boolean
};

export default function FormField({ label, type = "text", name, placeholder, isMessage }: FormFieldProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {isMessage ? 
        <textarea name="message" id="message" rows={6} placeholder={placeholder}></textarea>
        :
        <input id={name} name={name} type={type} placeholder={placeholder} />
    }
    </>
  );
}