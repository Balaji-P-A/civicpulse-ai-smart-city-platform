type Props = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({
  message,
  onConfirm,
  onCancel
}: Props) {
  return (
    <div>
      <p className="mb-4">{message}</p>
      <div className="flex gap-2">
        <button
          onClick={onConfirm}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Confirm
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
