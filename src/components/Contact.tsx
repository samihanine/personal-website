import { Section } from "./Section";
import React from "react";
import { InputText, InputSelect, InputArea, Button } from "../ui";
import { useTranslation } from "next-i18next";

export const Contact = () => {
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("job");
  const { t } = useTranslation();

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
      await fetch("https://submit-form.com/UbSTw7AA", {
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

      alert(t`contact.success`);
    } catch (e) {
      alert(t`contact.error`);
    }
  };
  return (
    <Section color="white" className="gap-10">
      <h2
        data-aos="fade-right"
        className="font-bold text-2xl lg:text-5xl flex flex-col gap-2 lg:gap-5"
      >
        <span>{t`contact.title`}</span>
        <span>{t`contact.subtitle`}</span>
      </h2>

      <form className="flex flex-col gap-4" onSubmit={submit}>
        <div className="flex gap-4 flex-col lg:flex-row">
          <InputText
            label={t`contact.name`}
            id="name"
            name="name"
            required
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <InputText
            required
            type="email"
            label={t`contact.email`}
            id="mail"
            name="mail"
            value={mail}
            onChange={(e: any) => setMail(e.target.value)}
          />
        </div>
        <InputSelect
          label={t`contact.interest`}
          id="interest"
          options={options}
          name="interest"
          value={type}
          onChange={(e: any) => setType(e.target.value)}
        />
        <InputArea
          label={t`contact.message`}
          id="message"
          name="message"
          required
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />

        <div className="flex gap-4">
          <Button
            label={t`contact.submit`}
            className="flex-1 mt-4"
            type="submit"
          />
          <div className="flex-1"></div>
        </div>
      </form>
    </Section>
  );
};
