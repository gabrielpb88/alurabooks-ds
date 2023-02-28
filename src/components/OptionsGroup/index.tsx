import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Article = styled.article<{ selected: boolean }>`
  width: 200px;
  height: 90px;
  border: ${(props) => (props.selected ? 'none' : '1px solid #EB9B00')};
  border-radius: 8px;
  background: ${(props) =>
    props.selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);'
      : '#fff'};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 16px;
  cursor: pointer;

  header {
    font-size: 12px;
    color: ${(props) => (props.selected ? '#fff' : '#EB9B00')};
  }

  strong {
    color: ${(props) => (props.selected ? '#fff' : '#EB9B00')};
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    font-size: 12px;
    color: ${(props) => (props.selected ? '#fff' : 'rgba(0, 0, 0, 0.54)')};
  }
`;

export interface IAbOptionsGroup {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface OptionsGroupProps {
  options: IAbOptionsGroup[];
  defaultValue?: IAbOptionsGroup;
  onChange?: (option: IAbOptionsGroup) => void;
}

export const AbOptionsGroup = ({
  options,
  defaultValue,
  onChange,
}: OptionsGroupProps) => {
  const [selected, setSelected] = useState<IAbOptionsGroup | null>(
    defaultValue || null
  );
  const handleOnChange = (option: IAbOptionsGroup) => {
    setSelected(option);
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <section>
      {options.map((option) => (
        <Article
          onClick={() => handleOnChange(option)}
          selected={option.id === selected?.id}
        >
          <header>{option.title}</header>
          <div>
            <strong>{option.body}</strong>
          </div>
          <footer>{option.footer}</footer>
        </Article>
      ))}
    </section>
  );
};
