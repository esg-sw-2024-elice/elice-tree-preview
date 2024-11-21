interface IdInputProps {
  id: string;
  setId: (Content: string) => void;
}

export default function IdInput({ id, setId }: IdInputProps) {
  return (
    <>
      <label htmlFor="user-id">
        ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력하세요"
        />
      </label>
      <br />
    </>
  );
}
