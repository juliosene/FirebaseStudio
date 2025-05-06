jsx
import React, { useState } from 'react';
import {
  Page,
  List,
  ListInput,
  ListButton
} from 'framework7-react';

const MonthlyTargetPage = () => {
  const [target, setTarget] = useState('');

  const handleSetTarget = () => {
    console.log('Setting monthly target to:', target);
  };

  return (
    <Page>
      <List form>
        <ListInput
          type="number"
          name="target"
          placeholder="Monthly Target"
          value={target}
          onInput={(e) => setTarget(e.target.value)}
        />
        <ListButton title="Set Target" onClick={handleSetTarget} fill />
      </List>
    </Page>
  );
};

export default MonthlyTargetPage;