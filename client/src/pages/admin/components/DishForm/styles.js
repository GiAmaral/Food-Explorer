import styled from "styled-components";
import { Form as RouterForm } from "react-router-dom";

import FormGroupComponent from "@components/FormGroup";
import FormSubmit from "@components/Buttons/FormSubmitButton";

export const Container = styled.main`
  padding: 1rem 3.2rem 5.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    max-width: 112rem;
    margin: 0 auto;
    padding-top: 4rem;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const PageTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 4.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Form = styled(RouterForm)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
`;

export const TextFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const FormGroup = styled(FormGroupComponent)`
  gap: 1.6rem;
`;

export const FirstInputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: grid;
    grid-template-columns: 1fr 36rem;
  }
`;

export const SecondInputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: grid;
    grid-template-columns: 1fr 25rem;
  }
`;

export const SubmitButton = styled(FormSubmit)`
  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    align-self: flex-end;
    padding: 1.2rem 2.4rem;
  }
`;
