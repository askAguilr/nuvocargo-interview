import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import User from './index';

export default {
    title: 'Features/Header/User',
    component: User,
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const Default = Template.bind({});