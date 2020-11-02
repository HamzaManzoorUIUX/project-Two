import React from 'react';
import Button from '@material-ui/core/Button';
function MyButton({text}) {
    return (
        <Button variant="contained" color="primary">
       {text}
      </Button>
    );
}

export default MyButton;