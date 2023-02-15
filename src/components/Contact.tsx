import { Section } from "./Section";

const Label = ({ label, id }: { label: string; id: string }) => {
  return (
    <label className="text-lg" htmlFor={id}>
      {label}
    </label>
  );
};

const InputText = ({
  label,
  id,
  ...props
}: {
  label: string;
  id: string;
  [key: string]: any;
}) => {
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

const InputSelect = ({
  label,
  id,
  options,
  ...props
}: {
  label: string;
  id: string;
  [key: string]: any;
  options: {
    value: string;
    label: string;
  }[];
}) => {
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

const InputTextArea = ({
  label,
  id,
  ...props
}: {
  label: string;
  id: string;
  [key: string]: any;
}) => {
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
    console.log("submit");

    const form = new FormData(e.currentTarget);
    const webhookUrl =
      "https://discord.com/api/webhooks/1075531773880045598/XzD0ByIFZc4HZ9JggdCZtj-iBAmYxAxJBJrIdSILDTcxgpN9NP2cnb7d5QPgnJv_-D4e";

    const webhookBody = {
      embeds: [
        {
          title: "Contact Form Submitted",
          fields: [
            {
              name: "Sender",
              value: form.get("first-name"),
            },
            {
              name: "Message",
              value: `Email: ${form.get("mail")} \n Message : ${form.get(
                "message"
              )} \n Interest : ${form.get("interest")}`,
            },
          ],
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookBody),
    });

    if (!response.ok) {
      alert("There was an error! Try again later!");
    }
  };

  return (
    <Section color="white" className="gap-10">
      <h2 className="font-bold text-4xl lg:text-[55px] lg:leading-[68px]">
        Love to hear from you, <br></br>Get in touch 👋
      </h2>

      <form className="flex flex-col gap-4" onSubmit={submit}>
        <div className="flex gap-4 flex-col lg:flex-row">
          <InputText
            label="Your name"
            id="first-name"
            name="first-name"
            required
          />
          <InputText
            required
            type="email"
            label="Your email"
            id="mail"
            name="mail"
          />
        </div>
        <InputSelect
          label="What are you interested"
          id="interest"
          options={options}
          name="interest"
        />
        <InputTextArea
          label="Your message"
          id="message"
          name="message"
          required
        />

        <div className="flex gap-4">
          <Button label="Just send !" className="flex-1 mt-4" type="submit" />
          <div className="flex-1"></div>
        </div>
      </form>
    </Section>
  );
};
