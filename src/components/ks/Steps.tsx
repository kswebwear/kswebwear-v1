import clsx from "clsx";

interface Step {
  title: string;
  body: string;
}

export default function Steps({ steps, onDark = false }: { steps: Step[]; onDark?: boolean }) {
  return (
    <ol className="m-0 grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={clsx("flex flex-col gap-3 border-t pt-6", onDark ? "border-ks-body" : "border-ks-line")}
        >
          <span className={clsx("font-ks-mono text-sm", onDark ? "text-ks-accent-on-dark" : "text-ks-accent")}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="ks-title text-2xl">{step.title}</h3>
          <p className={clsx("text-base leading-[1.55]", onDark ? "text-ks-on-dark" : "text-ks-body")}>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
