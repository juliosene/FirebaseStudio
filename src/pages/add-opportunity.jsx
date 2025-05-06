jsx
import React, { useState } from 'react';
import {
  Page,
  List,
  ListInput,
  ListButton
} from 'framework7-react';

const AddOpportunityPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddOpportunity = () => {
    
  };

  return (
    <Page>
      <List form>
        <ListInput type="text" name="title" placeholder="Opportunity Title" value={title} onInput={(e) => setTitle(e.target.value)}></ListInput>
        <ListInput type="text" name="description" placeholder="Opportunity Description" value={description} onInput={(e) => setDescription(e.target.value)}></ListInput>
        <ListButton title="Add Opportunity" onClick={handleAddOpportunity} fill></ListButton>
      </List>
    </Page>
  );
};

export default AddOpportunityPage;