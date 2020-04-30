import React from 'react'
import { Button } from 'semantic-ui-react'
import './Button.scss';

const SemanticButton = (props) => <Button> <span> {props.cta} </span> </Button>

export default SemanticButton;