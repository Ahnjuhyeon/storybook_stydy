import React from "react";
import PropTypes from "prop-types";
import "./button.css";

//컴포넌트화 한 파일 부분..
// styled-components로 component화한 ButtonPage의 상수 부분의 역할
export const Button = ({ isPrimary, size, font, label, ...props }) => {
  const mode = isPrimary ? "primary" : "secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `${size}`, `${font}`, mode].join(" ")}
      {...props}
    >
      <label>{label}</label>
      {/* content */}
    </button>
  );
};

// 위에 상수로 선언되어 export(내보내진)된 Button의   props의 자료 형태를 미리 알려주는 부분입니다. (TS같이!)
Button.propTypes = {
  isPrimary: PropTypes.bool,
  size: PropTypes.oneOf(["smallCircle", "largeCircle"]),
  onClick: PropTypes.func,
  label: PropTypes.string,
  font: PropTypes.oneOf(["regular", "bold"]),
};

// styled-components로 component화한 ButtonPage 안의 Button 상수 부분의 역할 (최하단에 styled준 button 부분)
// default button, 가장 기본이 되는 버튼의 속성들의 props와 해당하는 값을 적어두면 됩니다.
// component화할 버튼들의 합집합에 해당되는 속성들의 배열
Button.defaultProps = {
  isPrimary: true,
  size: "largeCircle",
  font: "bold",
  label: "click",
  onClick: undefined,
};
