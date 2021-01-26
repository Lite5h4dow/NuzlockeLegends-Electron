import React, { useContext, useEffect, useState } from "react";
import { Container, Segment, Button, Grid } from "semantic-ui-react";
import CreatableSelect from "react-select/creatable";
import { useAccountSearch } from "../../hooks/useAccountSearch";
import Select, { ActionMeta } from 'react-select'
import { auth } from "../../plugins/firebase";
import { AppContext } from "../../context/context";

export const MainPage = (): JSX.Element => {
  const { state, reducer } = useContext(AppContext)

  const { dropdowns, onCreateOption, setRegion, setAccount } = useAccountSearch()
  return (
    <Container>
      <Segment className="mainPage">
        Hi there
        <Grid centered >
          <Grid.Column width="3" >
            <Select options={dropdowns.regions.options}
              defaultValue={dropdowns.regions.options[0]}
              onChange={setRegion}
              value={dropdowns.regions.current}
            />
          </Grid.Column>
          <Grid.Column width="9">
            <CreatableSelect
              isClearable
              isLoading={dropdowns.accounts.loading}
              onCreateOption={onCreateOption}
              options={dropdowns.accounts.options}
              onChange={setAccount}
              value={dropdowns.accounts.current}
            />
          </Grid.Column>
        </Grid>


        <Segment placeholder />
      </Segment>
    </Container>
  );
};

export default MainPage;
