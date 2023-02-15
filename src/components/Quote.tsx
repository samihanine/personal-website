import { Section } from "./Section";

const QuoteSvg = ({ ...props }: { [key: string]: any }) => {
  return (
    <svg fill="currentColor" viewBox="0 0 123.961 123.961" {...props}>
      <g>
        <path
          d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
		C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
		H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
        />
        <path
          d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
		c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
		c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
        />
      </g>
    </svg>
  );
};

export const Quote = () => {
  return (
    <Section id="quote" color="white" className="gap-12">
      <QuoteSvg className="w-10 h-10 text-inherit" />
      <p className="text-center text-2xl lg:text-3xl">
        There are more possible games of chess than there are atoms in the
        universe.
        <br></br>
        It means that if you make a mistake, there’s a nearly infinite amount of
        ways to fix it.
      </p>
      <p className="text-right font-bold text-xl">- Harold Finch</p>
    </Section>
  );
};
