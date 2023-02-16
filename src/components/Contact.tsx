import { Section } from "./Section";
import React from "react";

const Label = ({ label, id }: { label: string; id: string }) => {
  return (
    <label className="text-lg" htmlFor={id}>
      {label}
    </label>
  );
};

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  [key: string]: any;
};

const InputText = ({ label, id, ...props }: InputTextProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Label id={id} label={label} />
      <input
        type="text"
        id={id}
        className="border border-secondary bg-white p-2"
        {...props}
      />
    </div>
  );
};

type InputSelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label: string;
  id: string;
  [key: string]: any;
  options: {
    value: string;
    label: string;
  }[];
};

const InputSelect = ({ label, id, options, ...props }: InputSelectProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Label id={id} label={label} />
      <select
        id={id}
        className="border border-secondary bg-white p-2"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

type InputTextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
  id: string;
  [key: string]: any;
};

const InputTextArea = ({ label, id, ...props }: InputTextAreaProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Label id={id} label={label} />
      <textarea
        id={id}
        className="border border-secondary bg-white p-2"
        {...props}
      />
    </div>
  );
};

const Button = ({ label, ...props }: { label: string; [key: string]: any }) => {
  return (
    <button
      {...props}
      className={"bg-secondary text-primary p-2 font-bold " + props.className}
    >
      {label}
    </button>
  );
};

export const Contact = () => {
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("job");

  const options = [
    {
      value: "job",
      label: "Job",
    },
    {
      value: "collaboration",
      label: "Collaboration",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://submit-form.com/UbSTw7AA", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: type + "\n" + message,
          name: name,
          email: mail,
        }),
      });

      setMail("");
      setName("");
      setMessage("");
      setType("job");
    } catch (e) {
      alert("There was an error! Try again later!");
    }
  };
  return (
    <Section color="white" className="gap-10">
      <h2
        data-aos="fade-right"
        className="font-bold text-4xl lg:text-[55px] lg:leading-[68px]"
      >
        Love to hear from you, <br></br>Get in touch 👋
      </h2>

      <form className="flex flex-col gap-4" onSubmit={submit}>
        <div className="flex gap-4 flex-col lg:flex-row">
          <InputText
            label="Your name"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <InputText
            required
            type="email"
            label="Your email"
            id="mail"
            name="mail"
            value={mail}
            onChange={(e: any) => setMail(e.target.value)}
          />
        </div>
        <InputSelect
          label="What are you interested"
          id="interest"
          options={options}
          name="interest"
          value={type}
          onChange={(e: any) => setType(e.target.value)}
        />
        <InputTextArea
          label="Your message"
          id="message"
          name="message"
          required
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />

        <div className="flex gap-4">
          <Button label="Just send !" className="flex-1 mt-4" type="submit" />
          <div className="flex-1"></div>
        </div>
      </form>
    </Section>
  );
};
