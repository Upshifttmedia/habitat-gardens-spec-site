interface CredentialBadgeProps {
  text: string;
}

export default function CredentialBadge({ text }: CredentialBadgeProps) {
  return (
    <span className="font-worksans font-bold uppercase tracking-[0.12em] text-wheat-dim text-sm">
      {text}
    </span>
  );
}
