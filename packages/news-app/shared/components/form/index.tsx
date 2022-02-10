import type * as Stitches from '@stitches/react';
import * as S from './index.style';

type MyFormProps = { css?: Stitches.CSS; onSubmit?: any };

export const Form = (props: MyFormProps) => {
  return (
    <S.StyledForm {...props} role="search">
      <S.Fieldset>
        <S.Label htmlFor="search"></S.Label>
        <S.Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          aria-label="Search your news"
        />
        <S.ButtonSubmit type="submit">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M13 11H12.21L11.93 10.73C12.91 9.59 13.5 8.11 13.5 6.5C13.5 2.91 10.59 0 7 0C3.41 0 0.5 2.91 0.5 6.5C0.5 10.09 3.41 13 7 13C8.61 13 10.09 12.41 11.23 11.43L11.5 11.71V12.5L16.5 17.49L17.99 16L13 11ZM7 11C4.51 11 2.5 8.99 2.5 6.5C2.5 4.01 4.51 2 7 2C9.49 2 11.5 4.01 11.5 6.5C11.5 8.99 9.49 11 7 11Z"
              fill="#A53737"
            />
          </svg>
        </S.ButtonSubmit>
      </S.Fieldset>
    </S.StyledForm>
  );
};
