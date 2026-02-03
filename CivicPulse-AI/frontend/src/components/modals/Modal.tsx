type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-96">
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
