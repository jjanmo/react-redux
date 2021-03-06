import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  margin: 10px 0;
  border: 5px solid dodgerblue;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.input`
  all: unset;
  border: 2px solid dodgerblue;
  text-align: center;
  cursor: pointer;
  margin: 10px 0;
  padding: 5px 10px;
  transition: 0.3s;
  &:active {
    transform: scale(1.4);
  }
`;
const Input = styled.input`
  border: 2px solid dodgerblue;
  color: dodgerblue;
  padding-left: 5px;
  margin: 10px;
  font-size: 1.5rem;
`;

function AddNumber({ handleClick, handleChange, input }) {
  return (
    <Container>
      <h1>Add Number</h1>
      <InputContainer>
        <Button type="button" onClick={handleClick} value="+" />
        <Input type="number" onChange={handleChange} value={input} />
      </InputContainer>
    </Container>
  );
}

export default AddNumber;
