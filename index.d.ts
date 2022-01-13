declare module "yup";
declare namespace JSX {
  interface TR
    extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
    isComplete?: boolean;
  }

  interface IntrinsicElements {
    tr: TR;
  }
}
