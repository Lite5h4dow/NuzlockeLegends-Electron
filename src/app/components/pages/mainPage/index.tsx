import React, {useContext, useEffect, useState} from "react";
import {Container, Segment, Button, Grid, Divider, Header} from "semantic-ui-react";
import CreatableSelect from "react-select/creatable";
import {useAccountSearch} from "../../hooks/useAccountSearch";
import Select from "react-select";
import {AppContext} from "../../context/context";
import {useUserMatchHistory} from "../../hooks";

export const MainPage = (): JSX.Element => {
  const {state, reducer} = useContext(AppContext);

  const {dropdowns, onCreateOption, setRegion, setAccount} = useAccountSearch();
  const {history, getUserHistory} = useUserMatchHistory();

  return (
    <Container>
      <Grid centered>
        <Grid.Column width="3">
          <Select
            options={dropdowns.regions.options}
            defaultValue={dropdowns.regions.options[0]}
            onChange={setRegion}
            value={dropdowns.regions.current}
          />
        </Grid.Column>
        <Grid.Column width="10">
          <CreatableSelect
            isClearable
            isLoading={dropdowns.accounts.loading}
            isDisabled={dropdowns.accounts.loading}
            onCreateOption={onCreateOption}
            options={dropdowns.accounts.options}
            onChange={setAccount}
            value={dropdowns.accounts.current}
          />
        </Grid.Column>
        <Grid.Column width="3">
          <Button
            content="Search"
            onClick={() => {
              getUserHistory(dropdowns.accounts.current!.value.accountId);
            }}
            disabled={!!!dropdowns.accounts.current}
            fluid
            color={!!dropdowns.accounts.current ? "green" : "red"}
          />
        </Grid.Column>
      </Grid>
      <Divider />
      <Segment>
        {!!!history.data ? (
          <Header textAlign="center" content="No Matches Here" />
        ) : (
          history.data.matches.map((match: any) => <Segment>{match.lane}</Segment>)
        )}
      </Segment>
    </Container>
  );
};

export default MainPage;
