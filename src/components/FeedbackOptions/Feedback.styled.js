import styled from 'styled-components';

export const FeedbackContainer = styled.div``;

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  padding: 12px 8px;
  border-radius: 10px;
  background-color: lightgray;
  color: black;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 350ms ease;

  &:hover,
  &:focus {
    background-color: gray;
    color: white;
  }
`;
