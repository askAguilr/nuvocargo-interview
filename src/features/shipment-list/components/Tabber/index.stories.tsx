import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabber from './index';

export default {
    title: 'Features/Header/Tabber',
    component: Tabber,
} as ComponentMeta<typeof Tabber>;

const Template: ComponentStory<typeof Tabber> = () => <Tabber/>;

export const Default = Template.bind({});