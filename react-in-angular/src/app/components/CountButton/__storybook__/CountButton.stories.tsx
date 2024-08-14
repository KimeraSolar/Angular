import React from "react";
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react/*";
import CountButtonBaseComponent from "..";

/* Wrapper for test
 * Provides the props and state manegement necessary for the test 
 */
const CountButton = () => {
    const [counter, setCounter] = useState<number>(0);
    const addCounter = () => setCounter(counter + 1);

    return <CountButtonBaseComponent counter={counter} onClick={addCounter} />
}

const meta = {
    title: 'Basic Components/Count Button',
    component: CountButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CountButton>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { }
