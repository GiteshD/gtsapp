import { StayPrimaryPortraitTwoTone } from "@material-ui/icons";
import React from "react";

import UpeerButton from './UpeerButton'

export default {
    component: UpeerButton,
    title: 'UpeerButton'
}

const Template = args => <UpeerButton {...args}></UpeerButton>




export const Primary = Template.bind({});

Primary.args = {
    content: 'Click Me',
    color: 'primary'
}

export const Secondary = Template.bind({});

Secondary.args = {
    content: 'Secondary',
    color: 'secondary'
}
