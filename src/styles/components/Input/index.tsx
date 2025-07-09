import React from "react";
import S from "./Input.styled";
import { Flex } from "@/styles/global";
import { FieldError } from "react-hook-form";
import { Paragraph } from "@/styles/typography";
import { DefaultTheme } from "styled-components";

export interface IInputProps {
  value?: string;
  register?: any;
  error?: FieldError | undefined;
  onInputChange?: (name: string, value: string) => void;
  setValue?: (name: string, value: any, options?: object) => void;
  label: string;
  placeholder: string;
  required?: boolean;
  secondary?: boolean;
  arrowButton?: boolean;
  type: "text" | "email" | "number" | "tel" | "textarea";
  width?: string | number;
  mobileWidth?: string | number;
  textColor?: keyof DefaultTheme["colors"];
  name: string;
}

const Input: React.FC<IInputProps> = ({
  textColor,
  onInputChange = () => {},
  register,
  error,
  width,
  mobileWidth,
  secondary,
  label,
  name,
  placeholder,
  type,
  required,
  arrowButton,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onInputChange(name, e.target.value);
  };

  return (
    <Flex
      $flexDir="column"
      $width={width}
      $mobileWidth={mobileWidth}
      style={{ position: "relative" }}
    >
      {label && (
        <Paragraph color={textColor} htmlFor={name}>
          {label}
          {required && "*"}
        </Paragraph>
      )}
      {type === "textarea" ? (
        <S.TextArea
          onChange={handleChange}
          placeholder={placeholder}
          $error={!!error}
          name={name}
          id={name}
          $secondary={!!secondary}
        />
      ) : (
        <S.Input
          type={type}
          {...register}
          onChange={handleChange}
          placeholder={placeholder}
          $secondary={!!secondary}
          $error={error}
          $width={width}
          name={name}
          id={name}
        />
      )}
      {arrowButton && (
        <S.ArrowButton>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
              fill="#313B48"
              data-name="Right"
            />
          </svg>
        </S.ArrowButton>
      )}
    </Flex>
  );
};

export default Input;
