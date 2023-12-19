import styled, { css } from "styled-components";

const InputPage = ({ variant, size, font, ...inputProps }) => {
  return (
    <>
      <Input variant={variant} size={size} font={font} {...inputProps} />
    </>
  );
};
export default InputPage;

const variantCSS = {
  primary: css`
    /* background-color: #75aff2; */
    border: 1px solid #75aff2;
    color: #fff;
    // &:hover {
    //   background-color: #97c7ff;
    // }
  `,
  secondary: css`
    /* background-color: #c0c0c0; */
    border: 1px solid #c0c0c0;
    color: #fff;
    // &:hover {
    //   background-color: #eaeaea;
    // }
  `,
};

const sizeCSS = {
  small: css`
    width: 200px;
    height: 30px;
    border-radius: 20px;
  `,
  large: css`
    width: 400px;
    height: 50px;
    border-radius: 30px;
  `,
};

const fontCSS = {
  small: css`
    font-size: 16px;
    font-weight: regular;
  `,
  large: css`
    font-size: 26px;
    font-weight: bold;
  `,
};

const Input = styled.input`
  /* button reset CSS */
  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  ${({ variant }) => variantCSS[variant]};
  ${({ size }) => sizeCSS[size]};
  ${({ font }) => fontCSS[font]};
`;
