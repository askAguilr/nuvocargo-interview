import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './index';

export default {
    title: 'Features/Header/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo/>;

export const Default = Template.bind({});