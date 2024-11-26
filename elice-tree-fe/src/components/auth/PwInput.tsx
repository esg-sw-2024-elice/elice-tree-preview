interface PwInputProps {
  pw: string;
  setPw: (Content: string) => void;
}

export default function PwInput({ pw, setPw }: PwInputProps) {
  return (
    <>
      <label htmlFor="user-pw">
        패스워드:
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
      </label>
      <br />
    </>
  );
}
