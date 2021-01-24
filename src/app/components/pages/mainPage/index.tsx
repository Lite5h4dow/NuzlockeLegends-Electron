import React, { useEffect } from "react";
import { Container, Segment, Button } from "semantic-ui-react";
import CreatableSelect from "react-select/creatable";
import { useAccountSearch } from "../../hooks";

export const MainPage = (): JSX.Element => {
  const { searchState, createOption } = useAccountSearch()
  return (
    <Container>
      <Segment className="mainPage">
        Hi there
        <CreatableSelect
          isClearable
          isDisabled={searchState.loading}
          isLoading={searchState.loading}
          options={searchState.userOptions}
          onCreateOption={createOption}
        />
        <Button content="log options" onClick={() => { console.log(searchState.userOptions) }} />
      </Segment>
    </Container>
  );
};

export default MainPage;
