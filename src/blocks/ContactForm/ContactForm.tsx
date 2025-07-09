"use client";
import React, { useState } from "react";
import * as S from "./ContactForm.styled";
import { H1, Paragraph } from "@/styles/typography";
import { BlockContainer, Button } from "@/styles/components";
import { Flex } from "@/styles/global";
import { TextField } from "@mui/material";

export interface IContactFormProps {
  title: string;
  text: string;
}

const ContactForm: React.FC<IContactFormProps> = ({ title, text }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <BlockContainer narrow largeBottomMargin largeTopMargin>
      <S.Wrapper>
        <Flex $flexDir="column" $gap={20}>
          <H1>{title}</H1>
          <Paragraph>{text}</Paragraph>
        </Flex>
        <S.Form onSubmit={handleSubmit}>
          <Flex
            $mobileFlexDir="column"
            $gap={12}
            $mobileGap={12}
            $width={"100%"}
          >
            <TextField
              label="Full Name"
              variant="outlined"
              value={formData.fullName}
              name="fullName"
              type="text"
              onChange={(e) => handleChange("fullName", e.target.value)}
              style={{ width: "100%" }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={formData.email}
              name="email"
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
              style={{ width: "100%" }}
            />
          </Flex>

          <TextField
            label="Subject"
            variant="outlined"
            value={formData.subject}
            name="subject"
            type="text"
            onChange={(e) => handleChange("subject", e.target.value)}
            style={{ width: "100%" }}
          />

          <TextField
            label="Message"
            value={formData.message}
            name="message"
            onChange={(e) => handleChange("message", e.target.value)}
            style={{ width: "100%" }}
            multiline
            rows={4}
          />

          <Button type="submit" label="Send" secondary onClick={handleSubmit} />
        </S.Form>
      </S.Wrapper>
    </BlockContainer>
  );
};

export default ContactForm;
