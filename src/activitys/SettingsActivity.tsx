import * as React from 'react';
import {ScrollView} from 'react-native';
import {List, Switch} from 'react-native-paper';
import {Activity} from '../Manifest';
import {window} from '../utils/window';

const SettingsActivity: React.FC<Activity<'SettingsActivity'>> = ({
  navigation,
}) => {
  return (
    <React.Fragment>
      <ScrollView>
        <List.Section>
          <List.Subheader>Repositories</List.Subheader>
          <List.Item
            title="Manage your repositories"
            left={props => <List.Icon {...props} icon="puzzle" />}
            onPress={() => {
              navigation.navigate('RepoActivity');
            }}
          />
        </List.Section>
        <List.Section>
          <List.Subheader>Appearance</List.Subheader>
          {/* <List.Item
            title="Dark mode"
            left={props => <List.Icon {...props} icon="theme-light-dark" />}
            right={props => (
              <Switch
                value={isDarkmode}
                {...props}
                onValueChange={state => setIsDarkmode(state)}
              />
            )}
          /> */}
        </List.Section>
        <List.Section>
          <List.Subheader>Info</List.Subheader>
          <List.Item
            title="Source code"
            left={props => <List.Icon {...props} icon="github" />}
            onPress={() => window.open('https://github.com/DerGoogler/MMRL')}
          />
          <List.Item
            title="Issues"
            left={props => <List.Icon {...props} icon="bug" />}
            onPress={() =>
              window.open('https://github.com/DerGoogler/MMRL/issues')
            }
          />
        </List.Section>
      </ScrollView>
    </React.Fragment>
  );
};

export default SettingsActivity;
