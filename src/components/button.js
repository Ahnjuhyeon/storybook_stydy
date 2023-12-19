import styled, { css } from "styled-components";

const ButtonPage = ({ children, size, variant, font, ...rest }) => {
  return (
    <>
      <Button size={size} variant={variant} font={font} {...rest}>
        {children}
      </Button>
    </>
  );
};
export default ButtonPage;

const variantCSS = {
  primary: css`
    background-color: #75aff2;
    color: #fff;
    &:hover {
      background-color: #97c7ff;
    }
  `,
  secondary: css`
    background-color: #c0c0c0;
    color: #fff;
    &:hover {
      background-color: #eaeaea;
    }
  `,
};

const sizeCSS = {
  smallCircle: css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
  `,
  largeCircle: css`
    width: 98px;
    height: 98px;
    border-radius: 50%;
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

const Button = styled.button`
  /* button reset CSS */
  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  /* button css 중 공통되는 부분 (교집합) */
  cursor: pointer;
  transition: all 0.6s;

  /* 위에 custom한 css를 적용하기 위한 부분 */
  /* props로 전달받아 각각 요소를 조합해 조립하는 방식 */
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ font }) => fontCSS[font]}
`;
