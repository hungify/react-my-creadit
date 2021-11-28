import { useRef, useState } from "react";
import styled from "styled-components";
import { FormMixin } from "../../styles/MixinStyled";

type SearchBoxProps = {
  onSubmit: (value: object) => void;
};

function SearchForm(props: SearchBoxProps) {
  const { onSubmit } = props;
  const [keyword, setKeyword] = useState<string>("");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const SearchKeywordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setKeyword(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        keyword: value.replace(/\s/g, ""),
      };
      onSubmit(formValues);
    }, 300);
  };

  return (
    <FormContainer>
      <FormInput
        placeholder=" "
        type="text"
        value={keyword}
        onChange={SearchKeywordChange}
      />
      <LabelInput htmlFor="Search">Tìm kiếm</LabelInput>
    </FormContainer>
  );
}

export default SearchForm;

const FormContainer = styled.div`
  margin: 2rem auto 1rem auto;
  max-width: 25rem;
  position: relative;
  margin-bottom: 40px;
`;
const FormInput = styled.input`
  ${FormMixin.InputEffect}
`;
const LabelInput = styled.label`
  ${FormMixin.LabelEffect}
`;
